import { DatasetCore, NamedNode, Term } from 'rdf-js'
import cf, { GraphPointer } from 'clownface'
import type { RdfResourceCore, ResourceIdentifier, ResourceNode } from '../RdfResource'
import { rdf } from '@tpluscode/rdf-ns-builders'
import RDF from '@rdf-esm/data-model'
import { onlyUnique } from './filter'
import * as compare from './compare'

function getNode(value: RdfResourceCore | ResourceIdentifier | string): ResourceIdentifier {
  if (typeof value === 'string') {
    return RDF.namedNode(value)
  }

  if ('termType' in value) {
    return value
  }

  return value.id
}

type NamedNodePointer<D extends DatasetCore> = ResourceNode<NamedNode, D>

export interface TypeCollection<D extends DatasetCore> extends Set<RdfResourceCore<NamedNodePointer<D>>> {
  add(value: RdfResourceCore<NamedNodePointer<D>> | NamedNode | string): this
  delete(value: RdfResourceCore<ResourceNode<ResourceIdentifier, D>> | NamedNode | string): boolean
  has(value: RdfResourceCore<ResourceNode<ResourceIdentifier, D>> | NamedNode | string): boolean
}

export default class <D extends DatasetCore> implements Set<RdfResourceCore<NamedNodePointer<D>>> {
  private readonly __resource: RdfResourceCore<ResourceNode<ResourceIdentifier, D>>
  private readonly __allGraphs: boolean
  private __graph: GraphPointer<Term, D>

  add(value: RdfResourceCore<NamedNodePointer<D>> | NamedNode | string): this {
    this.__resource.pointer.addOut(rdf.type, getNode(value))
    return this
  }

  clear(): void {
    this.__graph.deleteOut(rdf.type)
  }

  delete(value: RdfResourceCore<ResourceNode<ResourceIdentifier, D>> | NamedNode | string): boolean {
    const deletedQuads = this.__graph.dataset.match(this.__resource.id, rdf.type, getNode(value))

    for (const quad of deletedQuads) {
      this.__graph.dataset.delete(quad)
    }

    return deletedQuads.size > 0
  }

  forEach(callbackfn: (value: RdfResourceCore<NamedNodePointer<D>>, value2: RdfResourceCore<NamedNodePointer<D>>, set: Set<RdfResourceCore<NamedNodePointer<D>>>) => void, thisArg?: unknown): void {
    for (const value of this.values()) {
      callbackfn.call(thisArg, value, value, this)
    }
  }

  has(value: RdfResourceCore<ResourceNode<ResourceIdentifier, D>> | NamedNode | string): boolean {
    return this.__graph.has(rdf.type, getNode(value)).terms.length > 0
  }

  get size(): number {
    return this.__graph.out(rdf.type).terms.filter(onlyUnique(compare.terms)).length
  }

  [Symbol.iterator](): IterableIterator<RdfResourceCore<NamedNodePointer<D>>> {
    return this.values()
  }

  entries(): IterableIterator<[RdfResourceCore<NamedNodePointer<D>>, RdfResourceCore<NamedNodePointer<D>>]> {
    return this.__values.map<[RdfResourceCore<NamedNodePointer<D>>, RdfResourceCore<NamedNodePointer<D>>]>(res => [res, res])[Symbol.iterator]()
  }

  keys(): IterableIterator<RdfResourceCore<NamedNodePointer<D>>> {
    return this.values()
  }

  values(): IterableIterator<RdfResourceCore<NamedNodePointer<D>>> {
    return this.__values[Symbol.iterator]()
  }

  [Symbol.toStringTag]: string;

  public constructor(resource: RdfResourceCore<ResourceNode<any, D>>, allGraphs = false) {
    this.__resource = resource
    this.__allGraphs = allGraphs
    // TODO: when clownface gets graph feature
    // this.__graph = allGraphs ? resource.pointer.fromUnionGraph() : resource.pointer
    this.__graph = allGraphs ? cf({ dataset: resource.pointer.dataset, term: resource.pointer.term, graph: undefined }) : resource.pointer
  }

  private get __values() {
    const graphId = !this.__allGraphs ? this.__resource._graphId : null
    // TODO: when clownface gets graph feature
    // const types: MultiPointer<Term, D> = this.__resource.pointer.from(graphId).out(rdf.type)

    const typeQuads = this.__graph.dataset.match(this.__resource.id, rdf.type, null, graphId)

    const types = [...typeQuads]
      .map(quad => {
        return cf({
          dataset: this.__graph.dataset,
          term: quad.object,
          graph: quad.graph,
        })
      })

    return types
      .map(type => this.__resource._create<RdfResourceCore<NamedNodePointer<D>>>(type))
      .filter(onlyUnique(compare.resources(false)))
  }
}
