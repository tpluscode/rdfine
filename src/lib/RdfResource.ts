import { NamedNode, DatasetCore, BlankNode } from 'rdf-js'
import cf, { SafeClownface, SingleContextClownface } from 'clownface'
import { Constructor, Mixin, ResourceFactory } from './ResourceFactory'
import once from 'once'
import { TypeCollection } from './TypeCollection'

type ObjectOrFactory<T> = T | ((self: RdfResource) => T)

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: BlankNode | NamedNode
  readonly types: TypeCollection<D>
  readonly _node: SingleContextClownface<D, NamedNode | BlankNode>
  hasType (type: string | NamedNode): boolean
  _create<T extends RdfResource>(term: SingleContextClownface<D, NamedNode | BlankNode>, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]): T
}

export default class RdfResourceImpl<D extends DatasetCore = DatasetCore> implements RdfResource<D> {
  public readonly _node: SingleContextClownface<D, NamedNode | BlankNode>
  private readonly __initialized: boolean = false
  private readonly __initializeProperties: (() => boolean)
  public static __ns?: any
  public static factory: ResourceFactory = new ResourceFactory(RdfResourceImpl)

  public constructor(node: SafeClownface<D, NamedNode | BlankNode> | { dataset: D; term: NamedNode | BlankNode; graph?: NamedNode }) {
    let contexts: SingleContextClownface<D, NamedNode | BlankNode>[]

    if ('_context' in node) {
      contexts = node.toArray()
    } else {
      // TODO: remove cast after DefinitelyTyped/DefinitelyTyped#41310
      contexts = cf(node).toArray() as any
    }

    if (contexts.length !== 1) {
      throw new Error('RdfResource can only be initialized from a single node. Got ' + contexts.length)
    }

    this._node = contexts[0]
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

  public get id(): BlankNode | NamedNode {
    if (!this._node.term) throw new Error('Graph context does not represent a single node')

    switch (this._node.term.termType) {
      case 'BlankNode':
      case 'NamedNode':
        return this._node.term
      default:
        throw new Error('Resource identifier should only be a blank or named node')
    }
  }

  public readonly types: TypeCollection<D>

  public hasType(type: string | NamedNode): boolean {
    return this.types.has(type)
  }

  public _create<T extends RdfResource>(term: SingleContextClownface<D, NamedNode | BlankNode>, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]): T {
    return (this.constructor as Constructor).factory.createEntity<T>(term, mixins)
  }
}
