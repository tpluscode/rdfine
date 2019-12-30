import { BlankNode, DatasetCore, NamedNode, Term } from 'rdf-js'
import { SingleContextClownface } from 'clownface'
import { RdfResource } from './RdfResource'
import { rdf } from './vocabs'
import { namedNode } from 'rdf-data-model'
import { Constructor } from './ResourceFactory'

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
  private readonly __node: SingleContextClownface<D>
  private readonly __id: Term | null
  private readonly __constructor: Constructor

  add(value: RdfResource<D> | NamedNode | BlankNode | string): this {
    this.__node.addOut(rdf.type, getNode(value))
    return this
  }

  clear(): void {
    this.__node.deleteOut(rdf.type)
  }

  delete(value: RdfResource<D> | NamedNode | BlankNode | string): boolean {
    const deletedQuads = this.__node.dataset.match(this.__id, rdf.type, getNode(value))

    for (const quad of deletedQuads) {
      this.__node.dataset.delete(quad)
    }

    return deletedQuads.size > 0
  }

  forEach(callbackfn: (value: RdfResource<D>, value2: RdfResource<D>, set: Set<RdfResource<D>>) => void, thisArg?: unknown): void {
    for (const value of this.values()) {
      callbackfn.call(thisArg, value, value, this)
    }
  }

  has(value: RdfResource<D> | NamedNode | BlankNode | string): boolean {
    return this.__node.has(rdf.type, getNode(value)).terms.length > 0
  }

  get size(): number {
    return this.__node.out(rdf.type).terms.length
  }

  [Symbol.iterator](): IterableIterator<RdfResource<D>> {
    return this.values()
  }

  entries(): IterableIterator<[RdfResource<D>, RdfResource<D>]> {
    return this.__node
      .out(rdf.type)
      .map<[RdfResource<D>, RdfResource<D>]>(type => {
      const entry = this.__constructor.factory.createEntity<RdfResource<D>>(type)
      return [entry, entry]
    })[Symbol.iterator]()
  }

  keys(): IterableIterator<RdfResource<D>> {
    return this.values()
  }

  values(): IterableIterator<RdfResource<D>> {
    return this.__node
      .out(rdf.type)
      .map(type => {
        return this.__constructor.factory.createEntity<RdfResource<D>>(type)
      })[Symbol.iterator]()
  }

  [Symbol.toStringTag]: string;

  public constructor(node: SingleContextClownface<D>, constructor: Constructor) {
    this.__node = node
    this.__id = node.term
    this.__constructor = constructor
  }
}
