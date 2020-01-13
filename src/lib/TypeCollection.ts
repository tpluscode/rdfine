import { BlankNode, DatasetCore, NamedNode } from 'rdf-js'
import { RdfResource } from './RdfResource'
import { rdf } from './vocabs'
import { namedNode } from 'rdf-data-model'

function getNode(value: RdfResource | NamedNode | BlankNode | string): NamedNode | BlankNode {
  if (typeof value === 'string') {
    return namedNode(value)
  }

  if ('termType' in value) {
    return value
  }

  return value.id
}

export class TypeCollection<D extends DatasetCore> implements Set<RdfResource<D>> {
  private readonly __resource: RdfResource<D>

  add(value: RdfResource<D> | NamedNode | BlankNode | string): this {
    this.__resource._node.addOut(rdf.type, getNode(value))
    return this
  }

  clear(): void {
    this.__resource._node.deleteOut(rdf.type)
  }

  delete(value: RdfResource<D> | NamedNode | BlankNode | string): boolean {
    const deletedQuads = this.__resource._node.dataset.match(this.__resource.id, rdf.type, getNode(value))

    for (const quad of deletedQuads) {
      this.__resource._node.dataset.delete(quad)
    }

    return deletedQuads.size > 0
  }

  forEach(callbackfn: (value: RdfResource<D>, value2: RdfResource<D>, set: Set<RdfResource<D>>) => void, thisArg?: unknown): void {
    for (const value of this.values()) {
      callbackfn.call(thisArg, value, value, this)
    }
  }

  has(value: RdfResource<D> | NamedNode | BlankNode | string): boolean {
    return this.__resource._node.has(rdf.type, getNode(value)).terms.length > 0
  }

  get size(): number {
    return this.__resource._node.out(rdf.type).terms.length
  }

  [Symbol.iterator](): IterableIterator<RdfResource<D>> {
    return this.values()
  }

  entries(): IterableIterator<[RdfResource<D>, RdfResource<D>]> {
    return this.__values.map<[RdfResource<D>, RdfResource<D>]>(res => [res, res])[Symbol.iterator]()
  }

  keys(): IterableIterator<RdfResource<D>> {
    return this.values()
  }

  values(): IterableIterator<RdfResource<D>> {
    return this.__values[Symbol.iterator]()
  }

  [Symbol.toStringTag]: string;

  public constructor(resource: RdfResource<D>) {
    this.__resource = resource
  }

  private get __values() {
    return this.__resource._node
      .out(rdf.type)
      .map(type => {
        if (type.term.termType !== 'BlankNode' && type.term.termType !== 'NamedNode') {
          throw new Error('RDF Type must be a resource')
        }

        return this.__resource._create<RdfResource<D>>(type as any)
      })
  }
}
