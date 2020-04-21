import { DatasetCore, Literal } from 'rdf-js'
import { RdfResource, ResourceNode } from '../RdfResource'
import { createProxy } from './proxy'

export type AnyFunction<A = any> = (...input: any[]) => A
export interface Constructor<A extends RdfResource = RdfResource> {
  new (...input: any[]): A
  factory: ResourceFactory
}
interface ShouldApply {
  shouldApply: boolean | ((entity: RdfResource) => boolean)
}

type MaybeArray<T> = T | T[]

export interface ResourceIndexer<D extends DatasetCore = DatasetCore, T extends RdfResource<D> = RdfResource<D>> {
  [ prop: string ]: null | undefined | MaybeArray<T | Literal | T & ResourceIndexer>
}

export type Mixin<T extends AnyFunction = any> = InstanceType<ReturnType<T>>

export interface ResourceFactory<D extends DatasetCore = DatasetCore, R extends RdfResource<D> = RdfResource<D>, T extends AnyFunction = any> {
  addMixin(...mixins: (Mixin<T> & ShouldApply)[]): void
  createEntity<S>(
    term: ResourceNode<D>,
    typeAndMixins?: Mixin<T>[] | [Constructor, ...Mixin<T>[]],
    options?: ResourceCreationOptions<D>): R & S & ResourceIndexer<D, R>
}

export interface ResourceCreationOptions<D extends DatasetCore> {
  parent?: RdfResource<D>
}

export default class <D extends DatasetCore = DatasetCore, R extends RdfResource<D> = RdfResource<D>, T extends AnyFunction = any> implements ResourceFactory<D, R, T> {
  private __mixins: Set<Mixin<T>> = new Set()
  public BaseClass: Constructor

  public constructor(baseClass: Constructor) {
    this.BaseClass = baseClass
  }

  public addMixin(...mixins: (Mixin<T> & ShouldApply)[]): void {
    mixins.forEach(mixin => {
      this.__mixins.add(mixin)
    })
  }

  public createEntity<S>(term: ResourceNode<D>, typeAndMixins: Mixin<T>[] | [Constructor, ...Mixin<T>[]] = [], options: ResourceCreationOptions<D> = {}): R & S & ResourceIndexer<D, R> {
    let BaseClass = this.BaseClass
    let explicitMixins: Mixin[] = typeAndMixins
    if (typeAndMixins.length > 0) {
      const [BaseClassOrMixin, ...rest] = typeAndMixins
      if ('factory' in BaseClassOrMixin) {
        BaseClass = BaseClassOrMixin
        explicitMixins = rest
      }
    }
    const entity = new BaseClass(term)

    const mixins = [...this.__mixins].reduce<Mixin<T>[]>((selected, next: Mixin<T> & ShouldApply) => {
      if (next.shouldApply === true || (typeof next.shouldApply === 'function' && next.shouldApply(entity))) {
        if (!selected.includes(next)) {
          selected.push(next)
        }
      }

      return selected
    }, [...explicitMixins])

    const Type = mixins.reduce<Constructor>((Mixed: Constructor, Next: Mixin<T>) => Next(Mixed), BaseClass)
    ;(Type as any).__mixins = mixins

    return createProxy(new Type(term, {}, options.parent)) as R & S & ResourceIndexer<D, R>
  }
}
