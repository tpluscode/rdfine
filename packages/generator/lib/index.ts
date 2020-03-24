import { Clownface } from 'clownface'
import { NamespaceBuilder } from '@rdfjs/namespace'
import { Debugger } from 'debug'
import { NamedNode } from 'rdf-js'

type PropertyType = 'string' | 'number' | 'boolean' | 'Date' | NamedNode['termType']

export type TypeMap = Record<string, PropertyType>

export interface Context {
  vocabulary: Clownface
  namespace: NamespaceBuilder
  prefix: string
  defaultExport: string
  typeMappings: TypeMap
  excludedTypes: string[]
  log: {
    debug: Debugger
    warn: Debugger
    error: Debugger
  }
}
