import { GraphPointer } from 'clownface'
import { NamedNode, Term } from 'rdf-js'
import { Context } from '../index'

export { TypeMap } from './TypeMap'

export interface LiteralType {
  type: 'Literal'
  nativeName: string
  nativeType: typeof Number | typeof String | typeof Boolean | typeof Date
  datatype?: NamedNode
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
  qualifiedMixinName: string
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

export interface TypeMetaFactory<T extends TypeMeta = TypeMeta> {
  (term: GraphPointer<NamedNode>, context: Context): T | null
}

export type TypeMetaCollection = {
  get(key: GraphPointer): TypeMeta | undefined
  getOrThrow(key: GraphPointer): TypeMeta
  set(key: GraphPointer, value: TypeMeta): TypeMetaCollection
}
