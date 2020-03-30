import { NamedNode } from 'rdf-js'
import { Clownface, SingleContextClownface } from 'clownface'
import { Context } from '../index'
import { TypeMeta, TypeMetaCollection, TypeMetaFactory } from './index'

interface TypeMapInit {
  excluded: NamedNode[]
  factories: TypeMetaFactory[]
  context: Context
}

export class TypeMap implements TypeMetaCollection {
  private readonly __excluded: string[]
  private readonly __map = new Map<string, TypeMeta>()
  private readonly __context: Context
  private readonly __factories: TypeMetaFactory[];

  private get __graph(): Clownface {
    return this.__context.vocabulary
  }

  constructor({ excluded = [], factories = [], context }: TypeMapInit) {
    this.__excluded = excluded.map(term => term.value)
    this.__factories = factories
    this.__context = context
  }

  get(key: SingleContextClownface, noFallback = false): TypeMeta | undefined {
    if (this.__excluded.includes(key.value)) {
      return undefined
    }

    if (!this.__map.has(key.value)) {
      const created = this.__create(key, noFallback)
      if (created) {
        this.__map.set(key.value, created)
      }
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
    const type = this.get(key, true)
    if (type) {
      return type
    }

    throw new Error(`Type ${key.value} not found`)
  }

  private __create(term: SingleContextClownface, noFallback: boolean): TypeMeta | null {
    for (const create of this.__factories) {
      const found = create(term, this.__context)
      if (found) return found
    }

    if (noFallback) {
      return null
    }

    this.__context.log.warn('Type not found for term %s. Falling back to RDF/JS term', term.value)
    return {
      type: 'Term',
      termType: 'Term',
    }
  }
}
