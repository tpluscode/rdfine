import { Clownface } from 'clownface'
import { NamespaceBuilder } from '@rdfjs/namespace'
import { Debugger } from 'debug'

export interface Context {
  vocabulary: Clownface
  namespace: NamespaceBuilder
  prefix: string
  defaultExport: string
  datatypeMappings: Record<string, string>
  excludedTypes: string[]
  log: {
    debug: Debugger
    warn: Debugger
    error: Debugger
  }
}
