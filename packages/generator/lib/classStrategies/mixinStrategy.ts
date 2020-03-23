import { SafeClownface, SingleContextClownface } from 'clownface'
import { ModuleStrategy, Options } from './index'
import nameOf from '../util/nameOf'
import { SourceFile } from 'ts-morph'
import { rdf, rdfs, schema } from '@tpluscode/rdf-ns-builders'
import * as properties from '../property'
import { Context } from '../index'
import { isEnumerationType } from '../util/subClasses'
import { PropertyWriter } from '../property/PropertyWriter'
import * as rangeMappers from '../property/rangeMappers'

interface MixinParams {
  clas: SingleContextClownface
  mixinFile: SourceFile
  name: string
  superClasses: SafeClownface
}

function createMixinFunction({
  mixinFile,
  name,
  superClasses,
}: MixinParams, mixinName: string,
className: string, context: Context) {
  const mixinFunction = mixinFile.addFunction({
    name: mixinName,
    typeParameters: [{
      name: 'Base',
      constraint: 'Constructor',
    }],
    parameters: [{
      name: 'Resource',
      type: 'Base',
    }],
    isDefaultExport: true,
  })

  const baseClass = superClasses
    .toArray()
    .reduce((type, superClass) => {
      return `${nameOf.mixin(superClass)}(${type})`
    },
    'Resource')

  const mixinClass = mixinFunction.addClass({
    name: className,
    extends: baseClass,
    implements: [name],
  })

  mixinClass.addDecorator({
    name: 'namespace',
    arguments: [context.prefix],
  })

  mixinFunction.addStatements('return ' + className)

  return mixinClass
}

function createInterface({ mixinFile, name, superClasses }: MixinParams, context: Context) {
  const superInterfaces = superClasses
    .map(superClass => `${context.defaultExport}.${nameOf.term(superClass)}`)

  return mixinFile.addInterface({
    name,
    isExported: true,
    extends: [...superInterfaces, 'RdfResource'],
  })
}

export const mixinStrategy: ModuleStrategy = {
  matches(term: SingleContextClownface): boolean {
    const classType = term.has(rdf.type, [rdfs.Class, schema.Class])

    return classType.values.length > 0 && !isEnumerationType(term)
  },
  generate({ clas, project, exclude }: Options, context: Context) {
    const name = nameOf.term(clas)
    const className = nameOf.class(clas)
    const mixinName = nameOf.mixin(clas)

    context.log.debug('Generating mixin class %s', mixinName)

    const mixinFile = project.createSourceFile(`${name}.ts`, {}, { overwrite: true })

    const superClasses = clas
      .out(rdfs.subClassOf)
      .filter(superClass => !exclude.includes(nameOf.term(superClass)))
    const classProperties = properties.findProperties({ clas }, context)

    const rdfineImports = ['Constructor', 'namespace', 'RdfResource', 'RdfResourceImpl']
    if (classProperties.some(Boolean)) {
      rdfineImports.push('property')
    }
    mixinFile.addImportDeclaration({
      namedImports: rdfineImports,
      moduleSpecifier: '@tpluscode/rdfine',
    })
    mixinFile.addImportDeclaration({
      namespaceImport: 'rdf',
      moduleSpecifier: 'rdf-js',
    })
    mixinFile.addImportDeclaration({
      namedImports: [context.prefix],
      moduleSpecifier: './lib/namespace',
    })

    mixinFile.addImportDeclaration({
      namespaceImport: context.defaultExport,
      moduleSpecifier: '.',
      isTypeOnly: true,
    })
    superClasses.forEach(superClass => {
      mixinFile.addImportDeclaration({
        moduleSpecifier: `./${nameOf.term(superClass)}`,
        defaultImport: nameOf.mixin(superClass),
      })
    })

    const interfaceDeclaration = createInterface({ clas, mixinFile, name, superClasses }, context)
    const classDeclaration = createMixinFunction({ clas, mixinFile, name, superClasses }, mixinName, className, context)

    const propertyWriter = new PropertyWriter({
      interfaceDeclaration,
      classDeclaration,
      context,
      rangeMappers: [
        rangeMappers.defaultDatatypes(context.datatypeMappings),
        rangeMappers.schemaUrl(),
        rangeMappers.selfInterfaceName(name),
        rangeMappers.classToPrefixedName(context.defaultExport),
      ],
    })
    classProperties.forEach((cp) => propertyWriter.addProperty(cp))

    const implementationClass = mixinFile.addClass({
      name: `${name}Impl`,
      extends: `${mixinName}(RdfResourceImpl)`,
    })
    implementationClass.addConstructor({
      parameters: [{
        name: 'arg',
        type: 'any',
      }],
      statements: [
        'super(arg)',
        `this.types.add(${context.prefix}.${name})`,
      ],
    })

    mixinFile.addStatements([
      `${mixinName}.shouldApply = (r: RdfResource) => r.types.has(${context.prefix}.${name})`,
      `${mixinName}.Class = ${name}Impl`,
    ])

    return {
      moduleSpecifier: `./${name}`,
      mainModuleExport: name,
      mainModuleMixinExport: mixinName,
    }
  },
}
