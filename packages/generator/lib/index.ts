import cf, { AnyPointer, GraphPointer } from 'clownface'
import { Debugger } from 'debug'
import { Stream } from 'rdf-js'
import rdf from 'rdf-ext'
import nsBuilder from '@rdfjs/namespace'
import { expand, prefixes } from '@zazuko/rdf-vocabularies'
import { IndentationText, Project, QuoteKind, SourceFile } from 'ts-morph'
import FileSystem from './util/FileSystem'
import * as generator from './generator'
import * as EnumerationGenerator from './EnumerationGenerator'
import { EnumerationType, ResourceType, TypeMap, TypeMetaCollection } from './types'
import * as MixinGenerator from './MixinGenerator'
import * as factories from './types/metaFactories'
import { toUpperInitial } from './util/string'
import { expandMapKeys } from './util/overrideMap'
import { DatatypeName } from './types/wellKnownDatatypes'

type PropertyOverrides = Record<string, {
  values?: 'array' | 'list' | 'single' | Array<'array' | 'list' | 'single'>
}>

export interface Context {
  vocabulary: AnyPointer
  prefix: string
  defaultExport: string
  log: {
    debug: Debugger
    warn: Debugger
    error: Debugger
  }
  properties: PropertyOverrides
}

export interface GeneratedModule {
  node: GraphPointer
  type: ResourceType | EnumerationType
  writeModule(params: { project: Project; types: TypeMetaCollection; context: Context; indexModule: SourceFile }): void
}

export interface ModuleStrategy {
  (types: TypeMetaCollection, context: Context): GeneratedModule[]
}

export type TypeOverride = DatatypeName | 'NamedNode' | 'Datatype'

interface GeneratorOptions {
  stream: Stream
  namespace: string
  outDir: string
  prefix: string
  exclude: string[]
  types?: Record<string, TypeOverride>
  properties?: PropertyOverrides
}

function assertOptions(options: Record<string, any>) {
  ['stream', 'outDir', 'prefix']
    .forEach(arg => {
      if (!options[arg]) {
        throw new Error(`Missing ${arg} parameter`)
      }
    })
}

export async function generate(options: GeneratorOptions, logger: Debugger) {
  assertOptions(options)

  if (options.namespace) {
    prefixes[options.prefix] = options.namespace
  }

  if (!prefixes[options.prefix]) {
    throw new Error(`The prefix ${options.prefix} is not known to @zazuko/rdf-vocabularies. It has to provided as parameter`)
  }

  const dataset = await rdf.dataset().import(options.stream)
  const vocabulary = cf({ dataset })

  const project = new Project({
    fileSystem: new FileSystem(options.outDir),
    manipulationSettings: {
      useTrailingCommas: true,
      indentationText: IndentationText.TwoSpaces,
      quoteKind: QuoteKind.Single,
    },
  })

  const strategies: ModuleStrategy[] = [
    EnumerationGenerator.findTermsToGenerate,
    MixinGenerator.findTermsToGenerate,
  ]

  const namespace = nsBuilder(prefixes[options.prefix])
  const excludedTerms = options.exclude
    .map(excludedTerm => {
      return excludedTerm.includes(':') ? rdf.namedNode(expand(excludedTerm)) : namespace(excludedTerm)
    })

  const log = {
    debug: logger,
    error: logger.extend('error'),
    warn: logger.extend('warn'),
  }
  const context = {
    vocabulary,
    prefix: options.prefix,
    defaultExport: toUpperInitial(options.prefix),
    log,
    properties: expandMapKeys(options.properties, prefixes[options.prefix]),
  }
  const types = new TypeMap({
    excluded: excludedTerms,
    context,
    factories: [
      factories.overrides(expandMapKeys(options.types, prefixes[options.prefix])),
      factories.coreTerms,
      factories.datatypes,
      factories.enumerationTypes,
      factories.resourceTypes,
      factories.enumerationMembers,
    ],
  })

  log.error.enabled = true
  log.warn.enabled = true

  await generator.generate(project, types, strategies, context)
}
