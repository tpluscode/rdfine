import { Term, NamedNode } from 'rdf-js'
import Clownface from 'clownface/lib/Clownface'
import ns from '@rdfjs/namespace'
import { ResourceFactory } from './ResourceFactory'

const rdf = ns('http://www.w3.org/1999/02/22-rdf-syntax-ns#')

export interface RdfResource {
  readonly id: Term | null
  readonly types: Term[]
  hasType (type: string | NamedNode): boolean
}

export default class RdfResourceImpl implements RdfResource {
  public _node: Clownface

  public static _factory = new ResourceFactory(RdfResourceImpl)

  public constructor(cf: Clownface) {
    this._node = cf
  }

  public get id() {
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
