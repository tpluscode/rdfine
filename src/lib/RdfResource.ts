import { Term, NamedNode, DatasetCore, BlankNode } from 'rdf-js'
import cf, { SingleContextClownface } from 'clownface'
import ns from '@rdfjs/namespace'
import once from 'once'

const rdf = ns('http://www.w3.org/1999/02/22-rdf-syntax-ns#')

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: Term | null
  readonly types: Term[]
  readonly _node: SingleContextClownface<D>
  hasType (type: string | NamedNode): boolean
}

export default class RdfResourceImpl<D extends DatasetCore = DatasetCore> implements RdfResource<D> {
  public readonly _node: SingleContextClownface<D>
  private readonly __initializeProperties: (() => void)
  public static __ns?: any
  private static __defaults = new Map<string, unknown>()

  public constructor(node: SingleContextClownface<D> | { dataset: D; term: NamedNode | BlankNode; graph?: NamedNode }) {
    const contexts = cf(node).toArray()

    if (contexts.length !== 1) {
      throw new Error('RdfResource can only be initialized from a single node. Got ' + contexts.length)
    }

    this._node = cf(node).toArray()[0]

    this.__initializeProperties = once(() => {
      const self = this as any
      RdfResourceImpl.__defaults.forEach((value, key) => {
        if (typeof self[key] === 'undefined') {
          self[key] = value
        }
      })
    })

    this.__initializeProperties()
  }

  public get id() {
    if (!this._node.term) throw new Error('Graph context does not represent a single node')

    return this._node.term
  }

  public get types() {
    return this._node.out(rdf.type).terms
  }

  public hasType(type: string | NamedNode) {
    const typeNode = typeof type === 'string' ? this._node.namedNode(type) : type

    return this._node.has(rdf.type, typeNode).terms.length > 0
  }
}
