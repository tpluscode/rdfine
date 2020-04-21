/* eslint-disable camelcase,@typescript-eslint/camelcase */
import { defaultGraph } from '@rdfjs/data-model'
import { NamespaceBuilder } from '@rdfjs/namespace'
import { NamedNode, DatasetCore, BlankNode, DefaultGraph, Quad_Graph, Term, Literal } from 'rdf-js'
import cf, { SafeClownface, SingleContextClownface } from 'clownface'
import ResourceFactoryImpl, {
  Constructor,
  Mixin,
  ResourceCreationOptions,
  ResourceFactory,
  ResourceIndexer,
} from './lib/ResourceFactory'
import once from 'once'
import TypeCollectionCtor, { TypeCollection } from './lib/TypeCollection'

type ObjectOrFactory<T> = T | ((self: RdfResource) => T)

export type ResourceIdentifier = BlankNode | NamedNode
export type ResourceNode<D extends DatasetCore = DatasetCore> = { dataset: D; term: Term; graph?: NamedNode | DefaultGraph }

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: ResourceIdentifier
  readonly types: TypeCollection<D>
  readonly _selfGraph: SingleContextClownface<ResourceIdentifier, D>
  readonly _unionGraph: SafeClownface<ResourceIdentifier, D>
  readonly _graphId: Quad_Graph
  readonly _parent?: RdfResource<D>
  hasType (type: string | NamedNode): boolean
  _create<T extends RdfResource>(term: ResourceNode<D>, mixins?: Mixin[] | [Constructor, ...Mixin[]], options?: ResourceCreationOptions<D>): T & ResourceIndexer
}

export default class RdfResourceImpl<D extends DatasetCore = DatasetCore> implements RdfResource<D> {
  public readonly _selfGraph: SingleContextClownface<ResourceIdentifier, D>
  public readonly _unionGraph: SafeClownface<ResourceIdentifier, D>
  public readonly __initialized: boolean = false
  public readonly _parent?: RdfResource<D>
  private readonly __initializeProperties: (() => boolean)
  public static __ns?: NamespaceBuilder
  public static factory: ResourceFactory = new ResourceFactoryImpl(RdfResourceImpl)

  private static _userInitializeProperties(resource: RdfResourceImpl, init: Initializer<RdfResource> = {}): void {
    Object.entries(init)
      .filter(([prop]) => prop !== 'id' && prop !== 'types')
      .forEach(([prop, value]) => {
        (resource as any)[prop] = value
      })

    if (init.types && Array.isArray(init.types)) {
      init.types.forEach(type => resource.types.add(type))
    }
  }

  public constructor(graph: ResourceNode<D>, init: Initializer<any> = {}, parent?: RdfResource<D>) {
    if (graph.term.termType !== 'BlankNode' && graph.term.termType !== 'NamedNode') {
      throw new Error(`RdfResource cannot be initialized from a ${graph.term.termType} node`)
    }

    const selfGraph = cf({
      ...graph,
      term: graph.term,
    })

    if (selfGraph._context[0].graph) {
      this._selfGraph = selfGraph
      this._unionGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: undefined })
    } else {
      this._selfGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: defaultGraph() })
      this._unionGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term })
    }

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

    this._parent = parent
    this.__initialized = this.__initializeProperties()
    RdfResourceImpl._userInitializeProperties(this, init)
  }

  public get id(): ResourceIdentifier {
    return this._selfGraph.term
  }

  public get _graphId(): Quad_Graph {
    return this._selfGraph._context[0].graph!
  }

  public get types(): TypeCollection<D> {
    return new TypeCollectionCtor(this)
  }

  public hasType(type: string | NamedNode): boolean {
    return this.types.has(type)
  }

  public equals(other: RdfResource | undefined | null): boolean {
    if (!other) {
      return false
    }

    return this.id.equals(other.id)
  }

  public _create<T extends RdfResource>(term: ResourceNode<D>, mixins?: Mixin[] | [Constructor, ...Mixin[]], options: ResourceCreationOptions<D> = {}): T & ResourceIndexer {
    return (this.constructor as Constructor).factory.createEntity<T>(term, mixins, options)
  }
}

type UserDefinedInterface<T extends RdfResource> = Omit<T, keyof RdfResource>

interface BaseInitializer {
  types?: NamedNode[] | TypeCollection<any>
  id?: RdfResource['id']
}

type InitialNode<Node extends Term = NamedNode | BlankNode> = Node | SingleContextClownface<Node>
type InitialLiteral = InitialNode<Literal>

export type Initializer<T> = Partial<Omit<{
  [P in keyof T]?:
  T[P] extends (infer U)[] ? U extends RdfResource ? Initializer<UserDefinedInterface<U>>[] | InitialNode[]
    : U extends Term ? T[P] | InitialNode<Term>[] : T[P] | InitialLiteral[]
    : T[P] extends RdfResource ? Initializer<UserDefinedInterface<T[P]> & BaseInitializer> | InitialNode :
      T[P] extends Term ? T[P] | InitialNode<T[P]>
        : T[P] | InitialLiteral
}, keyof RdfResource>> & BaseInitializer

type PartialRecursive<T> = T extends object ? { [K in keyof T]?: PartialRecursive<T[K]> } : T

export function fromObject<T extends RdfResource>(initializer: Initializer<UserDefinedInterface<T> & BaseInitializer>): T {
  return initializer as unknown as T
}
