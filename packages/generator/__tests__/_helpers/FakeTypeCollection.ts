import { SingleContextClownface } from 'clownface'
import { NamedNode } from 'rdf-js'
import { TypeMeta, TypeMetaCollection } from '../../lib/types'

export class FakeTypeCollection implements TypeMetaCollection {
  private readonly __map: Map<string, any>

  constructor(types: [NamedNode, Partial<TypeMeta>][] = []) {
    this.__map = new Map<string, any>(types.map(([key, value]) => ([key.value, value])))
  }

  get(key: SingleContextClownface): (TypeMeta | undefined) {
    return this.__map.get(key.value)
  }

  getOrThrow(key: SingleContextClownface): TypeMeta {
    const found = this.get(key)
    if (found) return found

    throw new Error('Not found')
  }

  set(key: SingleContextClownface, value: TypeMeta): TypeMetaCollection {
    return this
  }
}
