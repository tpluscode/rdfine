import { DatasetCore } from 'rdf-js'
import { RdfResource, ResourceIdentifier } from '../RdfResource'
import { rdf } from './vocabs'
import { namedNode } from '@rdfjs/data-model'

function getNode(value: RdfResource | ResourceIdentifier | string): ResourceIdentifier {
  if (typeof value === 'string') {
    return namedNode(value)
  }

  if ('termType' in value) {
    return value
  }

  return value.id
}

export interface TypeCollection<D extends DatasetCore> extends Set<RdfResource<D>> {
  add(value: RdfResource<D> | ResourceIdentifier | string): this
  delete(value: RdfResource<D> | ResourceIdentifier | string): boolean
  has(value: RdfResource<D> | ResourceIdentifier | string): boolean
}

export default class <D extends DatasetCore> implements Set<RdfResource<D>> {
  private readonly __resource: RdfResource<D>

  add(value: RdfResource<D> | ResourceIdentifier | string): this {
    this.__resource._selfGraph.addOut(rdf.type, getNode(value))
    return this
  }

  clear(): void {
    this.__resource._selfGraph.deleteOut(rdf.type)
  }

  delete(value: RdfResource<D> | ResourceIdentifier | string): boolean {
    const deletedQuads = this.__resource._selfGraph.dataset.match(this.__resource.id, rdf.type, getNode(value))

    for (const quad of deletedQuads) {
      this.__resource._selfGraph.dataset.delete(quad)
    }

    return deletedQuads.size > 0
  }

  forEach(callbackfn: (value: RdfResource<D>, value2: RdfResource<D>, set: Set<RdfResource<D>>) => void, thisArg?: unknown): void {
    for (const value of this.values()) {
      callbackfn.call(thisArg, value, value, this)
    }
  }

  has(value: RdfResource<D> | ResourceIdentifier | string): boolean {
    return this.__resource._selfGraph.has(rdf.type, getNode(value)).terms.length > 0
  }

  get size(): number {
    return this.__resource._selfGraph.out(rdf.type).terms.length
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
    return this.__resource._selfGraph
      .out(rdf.type)
      .map(type => this.__resource._create<RdfResource<D>>(type))
  }
}
