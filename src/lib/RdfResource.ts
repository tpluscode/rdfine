import { NamedNode, DatasetCore, BlankNode } from 'rdf-js'
import cf, { SafeClownface, SingleContextClownface } from 'clownface'
import { Constructor, Mixin, ResourceFactory } from './ResourceFactory'
import once from 'once'
import { TypeCollection } from './TypeCollection'

type ObjectOrFactory<T> = T | ((self: RdfResource) => T)

export type ResourceIdentifier = BlankNode | NamedNode

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: ResourceIdentifier
  readonly types: TypeCollection<D>
  readonly _node: SingleContextClownface<D, ResourceIdentifier>
  hasType (type: string | NamedNode): boolean
  _create<T extends RdfResource>(term: SingleContextClownface<D>, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]): T
}

export default class RdfResourceImpl<D extends DatasetCore = DatasetCore> implements RdfResource<D> {
  public readonly _node: SingleContextClownface<D, ResourceIdentifier>
  private readonly __initialized: boolean = false
  private readonly __initializeProperties: (() => boolean)
  public static __ns?: any
  public static factory: ResourceFactory = new ResourceFactory(RdfResourceImpl)

  public constructor(graph: SafeClownface<D> | { dataset: D; term: ResourceIdentifier; graph?: NamedNode }) {
    if ('_context' in graph) {
      const [{ term }, ...rest] = graph.toArray()

      if (rest.length > 0) {
        throw new Error(`RdfResource can only be initialized from a single node. Got ${rest.length} additional values.`)
      }

      if (term.termType !== 'BlankNode' && term.termType !== 'NamedNode') {
        throw new Error(`RdfResource cannot be initialized from a ${term.termType} node`)
      }

      this._node = graph.node(term)
    } else {
      this._node = cf(graph)
    }

    this.types = new TypeCollection(this)

    this.__initializeProperties = once(() => {
      const self = this as any
      const defaults: Map<string, ObjectOrFactory<any>> = self.constructor.__defaults || new Map<string, ObjectOrFactory<any>>()
      defaults.forEach((value, key) => {
        if (typeof self[key] !== 'undefined') {
          return
        }

        if (typeof value === 'function') {
          self[key] = value(self)
          return
        }

        self[key] = value
      })

      return true
    })

    this.__initialized = this.__initializeProperties()
  }

  public get id(): ResourceIdentifier {
    return this._node.term
  }

  public readonly types: TypeCollection<D>

  public hasType(type: string | NamedNode): boolean {
    return this.types.has(type)
  }

  public equals(other: RdfResource | undefined | null): boolean {
    if (!other) {
      return false
    }

    return this.id.equals(other.id)
  }

  public _create<T extends RdfResource>(term: SingleContextClownface<D>, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]): T {
    return (this.constructor as Constructor).factory.createEntity<T>(term, mixins)
  }
}
