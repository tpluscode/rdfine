import { DatasetCore, Term } from 'rdf-js'
import cf, { SingleContextClownface } from 'clownface'
import { RdfResource, ResourceIdentifier } from '../RdfResource'
import { rdf } from '@tpluscode/rdf-ns-builders'
import RDF from '@rdfjs/data-model'
import { onlyUnique } from './filter'
import * as compare from './compare'

function getNode(value: RdfResource | ResourceIdentifier | string): ResourceIdentifier {
  if (typeof value === 'string') {
    return RDF.namedNode(value)
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
  private readonly __allGraphs: boolean
  private __graph: SingleContextClownface<Term, D>

  add(value: RdfResource<D> | ResourceIdentifier | string): this {
    this.__resource._selfGraph.addOut(rdf.type, getNode(value))
    return this
  }

  clear(): void {
    this.__graph.deleteOut(rdf.type)
  }

  delete(value: RdfResource<D> | ResourceIdentifier | string): boolean {
    const deletedQuads = this.__graph.dataset.match(this.__resource.id, rdf.type, getNode(value))

    for (const quad of deletedQuads) {
      this.__graph.dataset.delete(quad)
    }

    return deletedQuads.size > 0
  }

  forEach(callbackfn: (value: RdfResource<D>, value2: RdfResource<D>, set: Set<RdfResource<D>>) => void, thisArg?: unknown): void {
    for (const value of this.values()) {
      callbackfn.call(thisArg, value, value, this)
    }
  }

  has(value: RdfResource<D> | ResourceIdentifier | string): boolean {
    return this.__graph.has(rdf.type, getNode(value)).terms.length > 0
  }

  get size(): number {
    return this.__graph.out(rdf.type).terms.filter(onlyUnique(compare.terms)).length
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

  public constructor(resource: RdfResource<D>, allGraphs = false) {
    this.__resource = resource
    this.__allGraphs = allGraphs
    this.__graph = allGraphs ? cf({ dataset: resource._selfGraph.dataset, term: resource._selfGraph.term, graph: undefined }) : resource._selfGraph
  }

  private get __values() {
    const graphId = !this.__allGraphs ? this.__resource._graphId : null
    const typeQuads = this.__graph.dataset.match(this.__resource.id, rdf.type, null, graphId)

    return [...typeQuads]
      .map(quad => {
        return cf({
          dataset: this.__graph.dataset,
          term: quad.object,
          graph: quad.graph,
        })
      })
      .map(type => this.__resource._create<RdfResource<D>>(type))
      .filter(onlyUnique(compare.resources(false)))
  }
}
