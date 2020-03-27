import { NamedNode } from 'rdf-js'
import { Clownface, SingleContextClownface } from 'clownface'
import { Context } from '../index'
import { LiteralType, TermType, TypeMeta, TypeMetaCollection, TypeMetaFactory } from './index'
import { expand } from '@zazuko/rdf-vocabularies'

interface TypeMapInit {
  graph: Clownface
  excluded: NamedNode[]
  overrides: Record<string, string>
  factories: TypeMetaFactory[]
  context: Omit<Context, 'types'>
}

export class TypeMap implements TypeMetaCollection {
  private readonly __excluded: string[]
  private readonly __map = new Map<string, TypeMeta>()
  private readonly __graph: Clownface
  private readonly __context: Omit<Context, 'types'>
  private readonly __factories: TypeMetaFactory[];

  constructor({ graph, excluded, overrides = {}, factories, context }: TypeMapInit) {
    this.__graph = graph
    this.__excluded = excluded.map(term => term.value)
    this.__factories = factories
    this.__context = context
    Object.entries(overrides).forEach(override => {
      this.__addOverride(override, context.prefix)
    })
  }

  get(key: SingleContextClownface): TypeMeta | undefined {
    if (this.__excluded.includes(key.value)) {
      return undefined
    }

    if (!this.__map.has(key.value)) {
      this.__map.set(key.value, this.__create(key))
    }

    return this.__map.get(key.value)
  }

  set(key: SingleContextClownface, value: TypeMeta): this {
    if (this.__map.has(key.value)) {
      throw new Error(`Type ${key} has already been added`)
    }

    this.__map.set(key.value, value)
    return this
  }

  getOrThrow(key: SingleContextClownface) {
    const type = this.get(key)
    if (type) {
      return type
    }

    throw new Error(`Type ${key.value} not found`)
  }

  private __addOverride([term, type]: [string, 'NamedNode' | string], prefix: string) {
    let typeMeta: LiteralType | TermType
    if (type === 'NamedNode') {
      typeMeta = {
        type: 'Term',
        termType: 'NamedNode',
      }
    } else {
      typeMeta = {
        type: 'Literal',
        nativeName: type,
        nativeType: String,
      }
    }

    let typeUri: string
    if (term.includes(':')) {
      typeUri = expand(term)
    } else {
      typeUri = expand(`${prefix}:${term}`)
    }

    this.set(this.__graph.namedNode(typeUri), typeMeta)
  }

  private __create(term: SingleContextClownface): TypeMeta {
    for (const create of this.__factories) {
      const found = create(term, this.__context)
      if (found) return found
    }

    this.__context.log.warn('Type not found for term %s. Falling back to RDF/JS term', term.value)
    return {
      type: 'Term',
      termType: term.term.termType,
    }
  }
}
