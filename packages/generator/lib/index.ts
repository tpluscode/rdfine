import cf, { Clownface, SingleContextClownface } from 'clownface'
import { Debugger } from 'debug'
import { Stream } from 'rdf-js'
import rdf from 'rdf-ext'
import nsBuilder from '@rdfjs/namespace'
import { expand, prefixes } from '@zazuko/rdf-vocabularies'
import { IndentationText, Project, QuoteKind, SourceFile } from 'ts-morph'
import FileSystem from './util/FileSystem'
import * as generator from './generator'
import { EnumerationGenerator } from './EnumerationGenerator'
import { EnumerationType, ResourceType, TypeMap, TypeMetaCollection } from './types'
import { MixinGenerator } from './MixinGenerator'
import * as factories from './types/metaFactories'

export interface Context {
  vocabulary: Clownface
  prefix: string
  defaultExport: string
  log: {
    debug: Debugger
    warn: Debugger
    error: Debugger
  }
}

export interface ModuleStrategy {
  findTermsToGenerate(types: TypeMetaCollection, context: Context): GeneratedModule[]
}

export interface GeneratedModule {
  node: SingleContextClownface
  type: ResourceType | EnumerationType
  writeModule(sourceFile: SourceFile, types: TypeMetaCollection, context: Context): {
    mainModuleExport?: string
    mainModuleMixinExport?: string
  }
}

interface GeneratorOptions {
  stream: Stream
  namespace: string
  outDir: string
  prefix: string
  exclude: string[]
  types: Record<string, any>
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
    new EnumerationGenerator(),
    new MixinGenerator(),
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
    defaultExport: options.prefix.replace(/^\w/, first => first.toUpperCase()),
    log,
  }
  const types = new TypeMap({
    graph: vocabulary,
    excluded: excludedTerms,
    overrides: options.types,
    context,
    factories: [
      factories.knownDatatypes(options.types),
      factories.enumerationTypes,
      factories.resourceTypes,
      factories.enumerationMembers,
    ],
  })

  log.error.enabled = true
  log.warn.enabled = true

  await generator.generate(project, types, strategies, context)
}
