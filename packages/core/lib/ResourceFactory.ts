import { DatasetCore, Literal, NamedNode } from 'rdf-js'
import cf from 'clownface'
import { rdf } from '@tpluscode/rdf-ns-builders'
import type { RdfResource, ResourceNode } from '../RdfResource'
import { createProxy } from './proxy'

export type AnyFunction<A = any> = (...input: any[]) => A
export interface Constructor<A extends RdfResource = RdfResource> {
  new (...input: any[]): A
  factory: ResourceFactory
  __mixins: Mixin[]
}
type EvaluatedMixin = {
  shouldApply: boolean | ((entity: RdfResource) => boolean)
}
type SingleTypeMixin = {
  appliesTo: NamedNode
}

type MaybeArray<T> = T | T[]

export interface ResourceIndexer<D extends DatasetCore = DatasetCore, T extends RdfResource<D> = RdfResource<D>> {
  [ prop: string ]: null | undefined | MaybeArray<T | Literal | T & ResourceIndexer>
}

export type Mixin<T extends AnyFunction = any> = InstanceType<ReturnType<T>>

export interface ResourceFactory<D extends DatasetCore = DatasetCore, R extends RdfResource<D> = RdfResource<D>, T extends AnyFunction = any> {
  addMixin(...mixins: (EvaluatedMixin | SingleTypeMixin)[]): void
  createEntity<S>(
    term: ResourceNode<D>,
    typeAndMixins?: Mixin<T>[] | [Constructor, ...Mixin<T>[]],
    options?: ResourceCreationOptions<D>): R & S & ResourceIndexer<D, R>
}

export interface ResourceCreationOptions<D extends DatasetCore> {
  parent?: RdfResource<D>
}

export default class <D extends DatasetCore = DatasetCore, R extends RdfResource<D> = RdfResource<D>, T extends AnyFunction = any> implements ResourceFactory<D, R, T> {
  private __mixins: Set<Mixin<T> & EvaluatedMixin> = new Set()
  private __alwaysMixins: Set<Mixin<T>> = new Set()
  private __typeMixins: Map<string, (Mixin<T> & SingleTypeMixin)[]> = new Map()
  private __typeCache: Map<string, Constructor> = new Map<string, Constructor>()
  public BaseClass: Constructor

  public constructor(baseClass: Constructor) {
    this.BaseClass = baseClass
  }

  public addMixin(...mixins: (EvaluatedMixin | SingleTypeMixin)[]): void {
    this.__typeCache.clear()

    mixins.forEach(mixin => {
      if ('appliesTo' in mixin) {
        const current = this.__typeMixins.get(mixin.appliesTo.value) || []
        this.__typeMixins.set(mixin.appliesTo.value, [...current, mixin as any])
      } else {
        if (mixin.shouldApply === true) {
          this.__alwaysMixins.add(mixin as any)
        }

        this.__mixins.add(mixin as any)
      }
    })
  }

  public createEntity<S>(term: ResourceNode<D>, typeAndMixins: Mixin<T>[] | [Constructor, ...Mixin<T>[]] = [], options: ResourceCreationOptions<D> = {}): R & S & ResourceIndexer<D, R> {
    const graphPointer = cf(term)
    let BaseClass = this.BaseClass
    let explicitMixins: Mixin[] = typeAndMixins
    if (typeAndMixins.length > 0) {
      const [BaseClassOrMixin, ...rest] = typeAndMixins
      if ('factory' in BaseClassOrMixin) {
        BaseClass = BaseClassOrMixin
        explicitMixins = rest
      }
    }

    BaseClass = this.__getBaseClass(BaseClass, graphPointer.out(rdf.type).values)
    const entity = new BaseClass(term)

    const mixins = [...this.__mixins].reduce<Set<Mixin<T>>>((selected, next) => {
      if (next.shouldApply === true || (typeof next.shouldApply === 'function' && next.shouldApply(entity))) {
        selected.add(next)
      }

      return selected
    }, new Set(explicitMixins))

    const Type = this.__extend(BaseClass, [...mixins])

    return createProxy(new Type(term, {}, options.parent)) as R & S & ResourceIndexer<D, R>
  }

  private __getBaseClass(baseClass: Constructor, types: string[]) {
    const cacheKey = types.toString()
    const cached = this.__typeCache.get(cacheKey)
    if (cached) {
      return cached
    }

    const rdfTypeMixins = types.reduce<Set<Mixin<T>>>((mixins, type) => {
      const typeMixins = this.__typeMixins.get(type)
      if (typeMixins) {
        typeMixins.forEach(m => mixins.add(m))
      }

      return mixins
    }, new Set())

    const type = this.__extend(baseClass, [...this.__alwaysMixins, ...rdfTypeMixins])
    this.__typeCache.set(cacheKey, type)

    return type
  }

  private __extend(baseClass: Constructor & { __mixins?: Mixin<T>[] }, mixins: Mixin<T>[]): Constructor & { __mixins: Mixin<T>[] } {
    const type = mixins.reduce<Constructor>((Mixed: Constructor, Next: Mixin<T>) => Next(Mixed), baseClass)

    const baseMixins = baseClass.__mixins || []
    type.__mixins = [...baseMixins, ...mixins]

    return type
  }
}
