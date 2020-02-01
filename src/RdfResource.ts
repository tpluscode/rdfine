/* eslint-disable camelcase,@typescript-eslint/camelcase */
import { defaultGraph } from '@rdfjs/data-model'
import { NamedNode, DatasetCore, BlankNode, DefaultGraph, Quad_Graph } from 'rdf-js'
import cf, { SafeClownface, SingleContextClownface } from 'clownface'
import ResourceFactoryImpl, { Constructor, Mixin, ResourceFactory, ResourceIndexer } from './lib/ResourceFactory'
import once from 'once'
import TypeCollectionCtor, { TypeCollection } from './lib/TypeCollection'

type ObjectOrFactory<T> = T | ((self: RdfResource) => T)

export type ResourceIdentifier = BlankNode | NamedNode

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: ResourceIdentifier
  readonly types: TypeCollection<D>
  readonly _selfGraph: SingleContextClownface<D, ResourceIdentifier>
  readonly _unionGraph: SingleContextClownface<D, ResourceIdentifier>
  readonly _graphId: Quad_Graph
  hasType (type: string | NamedNode): boolean
  _create<T extends RdfResource>(term: SingleContextClownface<D>, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]): T & ResourceIndexer
}

export default class RdfResourceImpl<D extends DatasetCore = DatasetCore> implements RdfResource<D> {
  public readonly _selfGraph: SingleContextClownface<D, ResourceIdentifier>
  public readonly _unionGraph: SingleContextClownface<D, ResourceIdentifier>
  public readonly __initialized: boolean = false
  private readonly __initializeProperties: (() => boolean)
  public static __ns?: any
  public static factory: ResourceFactory = new ResourceFactoryImpl(RdfResourceImpl)

  public constructor(graph: SafeClownface<D> | { dataset: D; term: ResourceIdentifier; graph?: NamedNode | DefaultGraph }) {
    let selfGraph: SingleContextClownface<D, ResourceIdentifier>

    if ('_context' in graph) {
      const [{ term }, ...rest] = graph.toArray()

      if (rest.length > 0) {
        throw new Error(`RdfResource can only be initialized from a single node. Got ${rest.length} additional values.`)
      }

      if (term.termType !== 'BlankNode' && term.termType !== 'NamedNode') {
        throw new Error(`RdfResource cannot be initialized from a ${term.termType} node`)
      }

      selfGraph = graph.node(term)
    } else {
      selfGraph = cf(graph)
    }

    if (selfGraph._context[0].graph) {
      this._selfGraph = selfGraph
      this._unionGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: undefined })
    } else {
      this._selfGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: defaultGraph() })
      this._unionGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term })
    }

    this.types = new TypeCollectionCtor(this)

    this.__initializeProperties = once(() => {
      const self = this as any
      const defaults: Map<string, ObjectOrFactory<any>> = self.constructor.__defaults || new Map<string, ObjectOrFactory<any>>()
      defaults.forEach((value, key) => {
        const currentValue = self[key]
        const valueIsEmptyArray = Array.isArray(currentValue) && currentValue.length === 0
        const valueIsUndefined = typeof currentValue === 'undefined'

        if (!(valueIsEmptyArray || valueIsUndefined)) {
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
    return this._selfGraph.term
  }

  public get _graphId(): Quad_Graph {
    return this._selfGraph._context[0].graph!
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

  public _create<T extends RdfResource>(term: SingleContextClownface<D>, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]): T & ResourceIndexer {
    return (this.constructor as Constructor).factory.createEntity<T>(term, mixins)
  }
}
