/* eslint-disable camelcase,@typescript-eslint/camelcase,no-dupe-class-members */
import RDF from '@rdfjs/data-model'
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
import { xsd } from '@tpluscode/rdf-ns-builders'

type ObjectOrFactory<T> = T | ((self: RdfResource) => T)

export type ResourceIdentifier = BlankNode | NamedNode
export type ResourceNode<D extends DatasetCore = DatasetCore> = { dataset: D; term: Term; graph?: NamedNode | DefaultGraph }

export interface GetOptions {
  strict: boolean
}

export interface RdfResource<D extends DatasetCore = DatasetCore> {
  readonly id: ResourceIdentifier
  readonly types: TypeCollection<D>
  readonly _selfGraph: SingleContextClownface<ResourceIdentifier, D>
  readonly _unionGraph: SafeClownface<ResourceIdentifier, D>
  readonly _graphId: Quad_Graph
  readonly _parent?: RdfResource<D>
  readonly isAnonymous: boolean
  hasType (type: string | NamedNode): boolean
  /**
   * Gets the value of a property
   * @param property
   */
  get<T extends RdfResource = RdfResource> (property: string | NamedNode): T
  get<T extends RdfResource = RdfResource> (property: string | NamedNode, options?: GetOptions): T | null
  /**
   * Gets the value of a property and ensures that an array will be returned
   * @param property
   */
  getArray<T extends RdfResource = RdfResource> (property: string | NamedNode, options?: GetOptions): T[]
  /**
   * Gets the property value if it's boolean. Throws if it's not
   * @param property
   */
  getBoolean (property: string | NamedNode, options?: GetOptions): boolean
  /**
   * Gets the property value if it's a string. Throws if it's not
   * @param property
   */
  getString (property: string | NamedNode): string
  getString (property: string | NamedNode, options?: GetOptions): string | null
  /**
   * Gets the property value if it's a number. Throws if it's not
   * @param property
   */
  getNumber (property: string | NamedNode): number | null
  getNumber (property: string | NamedNode, options?: GetOptions): number | null
  _getObjects(property: string | NamedNode, options?: GetOptions): SafeClownface<Term, D>
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
  public static __mixins: Mixin[] = []

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
      this._selfGraph = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: RDF.defaultGraph() })
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

  public get isAnonymous() {
    return this.id.termType === 'BlankNode'
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

  public get<T extends RdfResource = RdfResource>(property: string | NamedNode, options?: GetOptions): T | RdfResource<D> | null {
    const objects = this.getArray<T>(property, options)

    if (objects.length > 0) {
      return objects[0]
    }

    return null
  }

  public getArray<T extends RdfResource = RdfResource>(property: string | NamedNode, options?: GetOptions): T[] {
    const values = this._getObjects(property, options)
      .filter(obj => obj.term.termType === 'NamedNode' || obj.term.termType === 'BlankNode')
      .map(obj => {
        return this._create<T>(obj, [], { parent: this })
      })

    if (!values.length) {
      return []
    }

    return values
  }

  public getNumber(property: string | NamedNode): number
  public getNumber(property: string | NamedNode, options?: GetOptions): number | null {
    const [value] = this._getObjects(property, options).toArray()

    if (typeof value === 'undefined') {
      return null
    }

    if (value.term.termType === 'Literal') {
      return parseFloat(value.value)
    }

    throw new Error(`Expected property '${property}' to be a number but found '${value}'`)
  }

  public getString(property: string | NamedNode): string
  public getString(property: string | NamedNode, options?: GetOptions): string | null {
    const [value] = this._getObjects(property, options).toArray()

    if (typeof value === 'undefined') {
      return null
    }

    if (value.term.termType === 'Literal') {
      return value.value
    }

    throw new Error(`Expected property '${property}' to be a literal but found '${value}'`)
  }

  public getBoolean(property: string | NamedNode, options?: GetOptions): boolean {
    const [value] = this._getObjects(property, options).toArray()

    if (typeof value === 'undefined') {
      return false
    }

    if (value.term.termType === 'Literal' && xsd.boolean.equals(value.term.datatype)) {
      return value.term.equals(this._selfGraph.literal(true).term)
    }

    throw new Error(`Expected property '${property}' to be a boolean but found '${value}'`)
  }

  public _getObjects(property: string | NamedNode, { strict }: GetOptions = { strict: false }): SafeClownface<Term, D> {
    const propertyNode = typeof property === 'string' ? this._selfGraph.namedNode(property) : property
    const objects = this._selfGraph.out(propertyNode)

    if (!objects.terms.length && strict) {
      throw new Error(`Value for predicate <${property}> was missing`)
    }

    return objects
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
