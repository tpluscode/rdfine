import { Debugger } from 'debug'
import { Stream } from 'rdf-js'
import rdf from 'rdf-ext'
import cf from 'clownface'
import { prefixes } from '@zazuko/rdf-vocabularies'
import * as ns from '@tpluscode/rdf-ns-builders'
import { ArrayLiteralExpression, IndentationText, Project, QuoteKind } from 'ts-morph'
import { generateNamespace } from './namespace'
import FileSystem from './util/FileSystem'
import { isDatatype } from './util/subClasses'
import { ModuleStrategy } from './classStrategies'
import { enumerationStrategy } from './classStrategies/enumerationStrategy'
import { mixinStrategy } from './classStrategies/mixinStrategy'
import nameOf from './util/nameOf'
import { defaultMappings } from './datatypes/defaultMappings'
import { Context, TypeMap } from './index'

interface GeneratorOptions {
  stream: Stream
  namespace: string
  outDir: string
  prefix: string
  types: TypeMap
  exclude: string[]
}

const strategies: ModuleStrategy[] = [
  enumerationStrategy,
  mixinStrategy,
]

function assertOptions(options: Record<string, any>) {
  ['stream', 'outDir', 'prefix']
    .forEach(arg => {
      if (!options[arg]) {
        throw new Error(`Missing ${arg} parameter`)
      }
    })
}

export async function generate(options: GeneratorOptions, log: Debugger) {
  assertOptions(options)
  const { namespace, stream, outDir, prefix } = options
  const typeMappings: TypeMap = {
    ...defaultMappings,
    ...options.types,
  }
  const project = new Project({
    fileSystem: new FileSystem(outDir),
    manipulationSettings: {
      useTrailingCommas: true,
      indentationText: IndentationText.TwoSpaces,
      quoteKind: QuoteKind.Single,
    },
  })

  const dataset = await rdf.dataset().import(stream)
  const vocabulary = cf({ dataset })
  const classes = vocabulary
    .has(ns.rdf.type, ns.rdfs.Class)
    .filter(clas => !isDatatype(clas, typeMappings))

  if (namespace) {
    prefixes[prefix] = namespace
  }

  if (!prefixes[prefix]) {
    throw new Error(`The prefix ${prefix} is not known to @zazuko/rdf-vocabularies. It has to provided as parameter`)
  }

  const context: Context = {
    vocabulary,
    prefix,
    defaultExport: prefix.replace(/^\w/, first => first.toUpperCase()),
    typeMappings,
    excludedTypes: options.exclude,
    log: {
      debug: log,
      error: log.extend('error'),
      warn: log.extend('warn'),
    },
  }

  context.log.error.enabled = true
  context.log.warn.enabled = true

  log('Generating types for vocabulary <%s>', namespace)
  generateNamespace({ project }, context)
  const indexModule = project.createSourceFile('index.ts', {}, { overwrite: true })

  indexModule.addImportDeclaration({
    namedImports: ['Mixin'],
    moduleSpecifier: '@tpluscode/rdfine/lib/ResourceFactory',
  })
  const defaultExport = indexModule.addExportAssignment({
    expression: '[]',
    isExportEquals: false,
  }).getExpression() as ArrayLiteralExpression

  classes
    .toArray()
    .filter(clas => !options.exclude.includes(nameOf.term(clas)))
    .sort((left, right) => {
      return left.value.localeCompare(right.value)
    })
    .forEach(clas => {
      const strategy = strategies.find(cs => cs.matches(clas))
      if (!strategy) {
        context.log.warn('Skipping class <%s>', clas.value)
        return
      }

      context.log.debug('Generating class <%s>', clas.value)

      const result = strategy.generate({ clas, project, exclude: options.exclude }, context)
      if (result.mainModuleExport) {
        indexModule.addExportDeclaration({
          namedExports: [result.mainModuleExport],
          moduleSpecifier: result.moduleSpecifier,
        })
      }

      if (result.mainModuleMixinExport) {
        indexModule.addImportDeclaration({
          defaultImport: result.mainModuleMixinExport,
          moduleSpecifier: result.moduleSpecifier,
        })
        defaultExport.addElement(`${result.mainModuleMixinExport} as Mixin`, { useNewLines: true })
      }
    })

  return project
}
