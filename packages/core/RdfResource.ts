/* eslint-disable camelcase,no-dupe-class-members,no-use-before-define */
import type { NamespaceBuilder } from '@rdf-esm/namespace'
import { NamedNode, DatasetCore, BlankNode, Quad_Graph, Term, Literal } from 'rdf-js'
import cf, { MultiPointer, GraphPointer } from 'clownface'
import ResourceFactoryImpl from './lib/ResourceFactory'
import type {
  Constructor,
  Mixin,
  ResourceCreationOptions,
  ResourceFactory,
  ResourceIndexer,
} from './lib/ResourceFactory'
import once from 'once'
import type { TypeCollection } from './lib/TypeCollection'
import TypeCollectionCtor from './lib/TypeCollection'
import { xsd } from '@tpluscode/rdf-ns-builders'
import { defaultGraphInstance } from '@rdf-esm/data-model'
import type { PropertyMeta } from './lib/decorators/property'
import { toJSON } from './lib/toJSON'
import type { Jsonified } from './lib/toJSON'
import { getPointer } from './lib/resource'

export type ResourceIdentifier = BlankNode | NamedNode
export type ResourceNode<ID extends ResourceIdentifier = ResourceIdentifier, D extends DatasetCore = DatasetCore> = GraphPointer<ID, D>

export interface GetOptions {
  strict: boolean
}

type TermType<T> = T extends ResourceNode<infer ID> ? ID : never
export type DatasetType<T> = T extends ResourceNode<any, infer D> ? D : never
export type SiblingNode<ID extends ResourceNode> = ResourceNode<ResourceIdentifier, DatasetType<ID>>

type CombinedType<T, ID extends ResourceNode> = T & RdfResource<SiblingNode<ID>>

export interface RdfResourceCore<ID extends ResourceNode = ResourceNode> {
  readonly id: TermType<ID>
  readonly types: TypeCollection<DatasetType<ID>>
  readonly pointer: ID
  readonly unionGraphPointer: MultiPointer<TermType<ID>, DatasetType<ID>>
  readonly _graphId: Quad_Graph
  readonly _parent?: RdfResource<SiblingNode<ID>>
  readonly isAnonymous: boolean
  equals(other: RdfResource | ResourceIdentifier | GraphPointer | undefined | null): boolean
  hasType (type: string | NamedNode): boolean
  /**
   * Gets the value of a property
   * @param property
   */
  get<T extends RdfResourceCore = RdfResourceCore> (property: string | NamedNode): CombinedType<T, ID>
  get<T extends RdfResourceCore = RdfResourceCore> (property: string | NamedNode, options?: GetOptions): CombinedType<T, ID> | null
  /**
   * Gets the value of a property and ensures that an array will be returned
   * @param property
   */
  getArray<T extends RdfResourceCore = RdfResourceCore> (property: string | NamedNode, options?: GetOptions): CombinedType<T, ID>[]
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

  /**
   * Returns JSON-LD-like object which represents the runtime interface of this resource
   */
  toJSON<T extends RdfResourceCore = this> (): Jsonified<RdfResource & T>
  _getObjects(property: string | NamedNode, options?: GetOptions): MultiPointer<Term, DatasetType<ID>>
  _create<T extends RdfResource>(term: ResourceNode<any, DatasetType<ID>>, mixins?: Mixin[] | [Constructor, ...Mixin[]], options?: ResourceCreationOptions<T>): T & ResourceIndexer
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RdfResource<ID extends ResourceNode = ResourceNode> extends RdfResourceCore<ID> {
}

export default class RdfResourceImpl<ID extends ResourceNode = ResourceNode> implements RdfResourceCore<ID> {
  public readonly pointer: ID
  public readonly unionGraphPointer: MultiPointer<TermType<ID>, DatasetType<ID>>
  public readonly __initialized: boolean = false
  public readonly _parent?: RdfResource<SiblingNode<ID>>
  private readonly __initializeProperties: (() => boolean)
  public static __ns?: NamespaceBuilder
  public static factory: ResourceFactory = new ResourceFactoryImpl(RdfResourceImpl)
  public static __mixins: Mixin[] = []
  public static __properties = new Map()

  private static _userInitializeProperties(resource: RdfResourceImpl, init: Initializer<RdfResource> = {}): void {
    Object.entries(init)
      .filter(([prop]) => prop !== 'id' && prop !== 'types')
      .forEach(([prop, value]) => {
        if (!prop.startsWith('http')) {
          // use decorated setter property
          (resource as any)[prop] = value
          return
        }

        const values = Array.isArray(value) ? value : [value]
        const pointers = values.map(value => {
          if (typeof value !== 'object' || 'termType' in value) {
            // use node or native value directly as object
            return resource.pointer.node(value)
          }

          // create and initialize an object resource
          const term = getPointer(resource.pointer, value.id)
          const childResource = resource._create(term, [], { initializer: value })
          return childResource.pointer
        })

        resource.pointer.addOut(resource.pointer.namedNode(prop), pointers)
      })

    if (init.types && Array.isArray(init.types)) {
      init.types.forEach(type => resource.types.add(type))
    }
  }

  public constructor(pointer: ID, init: Initializer<any> = {}, parent?: RdfResource<SiblingNode<ID>>) {
    if (pointer.term.termType !== 'BlankNode' && pointer.term.termType !== 'NamedNode') {
      throw new Error(`RdfResource cannot be initialized from a ${(pointer.term as any).termType} node`)
    }

    /* TODO: when clownface gets graph feature
    if (pointer._context[0].graph) {
      this.pointer = pointer
      this.unionGraphPointer = pointer.fromGraph(null)
    } else {
      this.pointer = pointer.fromGraph(pointer.defaultGraph)
      this.unionGraphPointer = pointer
    } */

    const selfGraph = cf({
      ...pointer,
      term: pointer.term,
    }) as any

    if (selfGraph._context[0].graph) {
      this.pointer = selfGraph
      this.unionGraphPointer = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: undefined })
    } else {
      this.pointer = cf({ dataset: selfGraph.dataset, term: selfGraph.term, graph: defaultGraphInstance }) as any
      this.unionGraphPointer = cf({ dataset: selfGraph.dataset, term: selfGraph.term })
    }

    this.__initializeProperties = once(() => {
      const self = this as any
      const properties: Map<string, PropertyMeta> = self.constructor.__properties || new Map()
      const defaults = [...properties]
        .map<[string, unknown]>(([prop, meta]) => [prop, meta.initial])
        .filter(([, initial]) => !!initial)
      defaults.forEach(([key, value]) => {
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

  public get id(): TermType<ID> {
    return this.pointer.term as any
  }

  public get _graphId(): Quad_Graph {
    return this.pointer._context[0].graph!
  }

  public get types(): TypeCollection<DatasetType<ID>> {
    return new TypeCollectionCtor<any>(this)
  }

  public get isAnonymous() {
    return this.id.termType === 'BlankNode'
  }

  public hasType(type: string | NamedNode): boolean {
    return this.types.has(type)
  }

  public equals(other: RdfResource<any> | ResourceIdentifier | GraphPointer | undefined | null): boolean {
    if (!other) {
      return false
    }
    if ('termType' in other) {
      return this.id.equals(other)
    }

    const otherPointer = '_context' in other ? other : other.pointer
    const idsEqual = this.id.equals(otherPointer.term)

    if (this.isAnonymous || otherPointer.term.termType === 'BlankNode') {
      return idsEqual && this.pointer.dataset === otherPointer.dataset
    }

    return idsEqual
  }

  public get<T extends RdfResourceCore = RdfResourceCore>(property: string | NamedNode, options?: GetOptions): CombinedType<T, ID> | null {
    const objects = this.getArray<T>(property, options)

    if (objects.length > 0) {
      return objects[0]
    }

    return null
  }

  public getArray<T extends RdfResourceCore = RdfResourceCore>(property: string | NamedNode, options?: GetOptions): CombinedType<T, ID>[] {
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
      return value.term.equals(this.pointer.literal(true).term)
    }

    throw new Error(`Expected property '${property}' to be a boolean but found '${value}'`)
  }

  public _getObjects(property: string | Term, { strict }: GetOptions = { strict: false }): MultiPointer<Term, DatasetType<ID>> {
    const propertyNode = typeof property === 'string' ? this.pointer.namedNode(property) : property
    const objects = this.pointer.out(propertyNode)

    if (!objects.terms.length && strict) {
      throw new Error(`Value for predicate <${property}> was missing`)
    }

    return objects as any
  }

  public _create<T extends RdfResourceCore, D extends DatasetCore = DatasetCore>(term: GraphPointer<Term, D>, mixins?: Mixin[] | [Constructor, ...Mixin[]], options: ResourceCreationOptions<T> = {}): CombinedType<T, SiblingNode<ID>> & ResourceIndexer {
    return (this.constructor as Constructor).factory.createEntity<T>(term, mixins, options) as any
  }

  public toJSON<T extends RdfResourceCore<any> = this>(): Jsonified<T> {
    return toJSON(this as any) as any
  }
}

type UserDefinedInterface<T extends RdfResource | undefined> = Omit<T, keyof RdfResource>

type BaseInitializer = Record<string, any> & {
  types?: NamedNode[] | TypeCollection<any>
  id?: RdfResource['id'] | string
}

type InitialNode<Node extends Term = NamedNode | BlankNode> = Node | GraphPointer<Node>
type InitialLiteral = InitialNode<Literal>

type InitializeSingle<T extends RdfResource | undefined> = Initializer<UserDefinedInterface<T> & BaseInitializer> | InitialNode
type InitializeArray<T extends RdfResource> = Array<InitializeSingle<T>>

export type Initializer<T> = Omit<{
  [P in keyof Required<T>]?: T[P] extends string
    ? T[P] | InitialLiteral
    : T[P] extends (RdfResource | undefined)
      ? InitializeSingle<T[P]>
      : T[P] extends Term
        ? T[P] | InitialNode<T[P]>
        : Extract<T[P], Array<any>> extends (infer U)[]
          ? U extends RdfResource
            ? InitializeArray<U> | InitializeSingle<U>
            : U extends Term
              ? T[P] | InitialNode<Term>[]
              : T[P] | InitialLiteral[]
          : unknown
}, keyof RdfResource> & BaseInitializer

// eslint-disable-next-line @typescript-eslint/ban-types
type PartialRecursive<T> = T extends object ? { [K in keyof T]?: PartialRecursive<T[K]> } : T

export function fromObject<T extends RdfResource>(initializer: Initializer<UserDefinedInterface<T> & BaseInitializer>): T {
  return initializer as unknown as T
}
