import { Clownface } from 'clownface'
import { Literal } from 'rdf-js'
import { RdfResource } from './RdfResource'
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

export interface ResourceIndexer<T extends RdfResource = RdfResource> {
  [ prop: string ]: null | undefined | MaybeArray<T | Literal | T & ResourceIndexer>
}

export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>

export class ResourceFactory<R extends RdfResource = RdfResource, T extends AnyFunction = any> {
  private __mixins: Set<Mixin<any>> = new Set()
  public BaseClass: Constructor

  public constructor(baseClass: Constructor) {
    this.BaseClass = baseClass
  }

  public addMixin(mixin: Mixin<T> & ShouldApply): void {
    this.__mixins.add(mixin)
  }

  public createEntity<S>(term: Clownface, typeAndMixins: Mixin<any>[] | [Constructor, ...Mixin<any>[]] = []): R & S & ResourceIndexer<R> {
    let BaseClass = this.BaseClass
    let explicitMixins: Mixin<any>[] = typeAndMixins
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

    return createProxy(new Type(term)) as R & S & ResourceIndexer<R>
  }
}
