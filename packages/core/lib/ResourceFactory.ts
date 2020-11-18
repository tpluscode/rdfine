/* eslint-disable no-use-before-define */
import { Literal, NamedNode } from 'rdf-js'
import { rdf } from '@tpluscode/rdf-ns-builders'
import type { NamespaceBuilder } from '@rdfjs/namespace'
import type { DatasetType, Initializer, RdfResource, RdfResourceCore, ResourceNode } from '../RdfResource'
import { createProxy } from './proxy'
import type { PropertyMeta } from './decorators/property'
import { GraphPointer } from 'clownface'

export type AnyFunction<A = any> = (...input: any[]) => A
export interface Constructor<A extends RdfResourceCore<any> = RdfResourceCore> {
  new (...input: any[]): A
  factory: ResourceFactory
  __mixins: Mixin[]
  __properties: Map<string, PropertyMeta>
  __ns?: NamespaceBuilder
}
type EvaluatedMixin = {
  shouldApply: boolean | ((entity: RdfResource) => boolean)
}
type SingleTypeMixin = {
  appliesTo: NamedNode
}

type MaybeArray<T> = T | T[]

export interface ResourceIndexer<T extends RdfResource = RdfResource> {
  [ prop: string ]: null | undefined | MaybeArray<T | Literal | T & ResourceIndexer<T>>
}

export type Mixin<T extends AnyFunction = any> = InstanceType<ReturnType<T>>

export interface ResourceFactory<T extends AnyFunction = any> {
  addMixin(...mixins: (EvaluatedMixin | SingleTypeMixin)[]): void
  createEntity<S, ID extends ResourceNode = ResourceNode>(
    term: GraphPointer,
    typeAndMixins?: Mixin<T>[] | [Constructor, ...Mixin<T>[]], // TODO: move mixins into options object
    options?: ResourceCreationOptions<RdfResourceCore<ID> & S>): RdfResourceCore<ID> & S & ResourceIndexer<RdfResourceCore<ID>>
}

export interface ResourceCreationOptions<R extends RdfResourceCore> {
  parent?: RdfResourceCore<any>
  initializer?: Initializer<R>
}

export default class <T extends AnyFunction = any> implements ResourceFactory<T> {
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

  public createEntity<S, ID extends ResourceNode = ResourceNode>(pointer: ResourceNode, typeAndMixins: Mixin<T>[] | [Constructor, ...Mixin<T>[]] = [], options: ResourceCreationOptions<RdfResourceCore<ID> & S> = {}): RdfResourceCore<ID> & S & ResourceIndexer<RdfResourceCore<ID>> {
    let BaseClass = this.BaseClass
    let explicitMixins: Mixin[] = typeAndMixins
    if (typeAndMixins.length > 0) {
      const [BaseClassOrMixin, ...rest] = typeAndMixins
      if ('factory' in BaseClassOrMixin) {
        BaseClass = BaseClassOrMixin
        explicitMixins = rest
      }
    }

    BaseClass = this.__getBaseClass(BaseClass, pointer.out(rdf.type).values)
    const entity = new BaseClass(pointer)

    const mixins = [...this.__mixins].reduce<Set<Mixin<T>>>((selected, next) => {
      if (next.shouldApply === true || (typeof next.shouldApply === 'function' && next.shouldApply(entity))) {
        selected.add(next)
      }

      return selected
    }, new Set(explicitMixins))

    const Type = this.__extend(BaseClass, [...mixins])

    return createProxy(new Type(pointer, options.initializer, options.parent)) as RdfResourceCore<ID> & S & ResourceIndexer<RdfResourceCore<ID>>
  }

  private __getBaseClass(baseClass: Constructor, types: string[]) {
    const cacheKey = [baseClass.name, ...types].toString()
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
