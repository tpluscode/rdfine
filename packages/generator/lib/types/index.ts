import { SingleContextClownface } from 'clownface'
import { Term } from 'rdf-js'
import { Context } from '../index'

export { TypeMap } from './TypeMap'

export interface TypeMetaFactory<T extends TypeMeta = TypeMeta> {
  (term: SingleContextClownface, context: Context): T | null
}

export interface LiteralType {
  type: 'Literal'
  nativeName: string
  nativeType: typeof Number | typeof String | typeof Boolean | typeof Date
}

export interface ResourceType {
  type: 'Resource'
  localName: string
  qualifiedName: string
  module: string
  mixinName: string
}

export interface ExternalResourceType {
  type: 'ExternalResource'
  module: string
  mixinName: string
  qualifiedName: string
  qualifier: string
  package: string
}

export interface EnumerationType {
  type: 'Enumeration'
  name: string
  module: string
  qualifiedName: string
}

export interface EnumerationMember {
  type: 'EnumerationMember'
  termName: string
  prefixedName: string
}

export interface TermType {
  type: 'Term'
  termType: Term['termType'] | 'Term'
}

export type TypeMeta = LiteralType | ResourceType | ExternalResourceType | EnumerationType | EnumerationMember | TermType

export type TypeMetaCollection = {
  get(key: SingleContextClownface): TypeMeta | undefined
  getOrThrow(key: SingleContextClownface): TypeMeta
  set(key: SingleContextClownface, value: TypeMeta): TypeMetaCollection
}
