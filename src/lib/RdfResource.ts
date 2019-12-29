import { Term, NamedNode, DatasetCore, BlankNode } from 'rdf-js'
import cf, { SingleContextClownface } from 'clownface'
import ns from '@rdfjs/namespace'
import { ResourceFactory } from './ResourceFactory'
import once from 'once'

const rdf = ns('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
type ObjectOrFactory<T> = T | ((self: RdfResource) => T)

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: BlankNode | NamedNode | null
  readonly types: Term[]
  readonly _node: SingleContextClownface<D>
  hasType (type: string | NamedNode): boolean
}

export default class RdfResourceImpl<D extends DatasetCore = DatasetCore> implements RdfResource<D> {
  public readonly _node: SingleContextClownface<D>
  private readonly __initializeProperties: (() => void)
  public static __ns?: any
  public static factory: ResourceFactory = new ResourceFactory(RdfResourceImpl)

  public constructor(node: SingleContextClownface<D> | { dataset: D; term: NamedNode | BlankNode; graph?: NamedNode }) {
    const contexts = cf(node).toArray()

    if (contexts.length !== 1) {
      throw new Error('RdfResource can only be initialized from a single node. Got ' + contexts.length)
    }

    this._node = cf(node).toArray()[0]

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
    })

    this.__initializeProperties()
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

  public get types() {
    return this._node.out(rdf.type).terms
  }

  public hasType(type: string | NamedNode) {
    const typeNode = typeof type === 'string' ? this._node.namedNode(type) : type

    return this._node.has(rdf.type, typeNode).terms.length > 0
  }
}
