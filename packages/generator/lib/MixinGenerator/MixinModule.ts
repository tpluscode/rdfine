import { Project, SourceFile, VariableDeclarationKind } from 'ts-morph'
import { Context } from '../index'
import { GraphPointer } from 'clownface'
import { ExternalResourceType, ResourceType, TypeMetaCollection } from '../types'
import { PropertyWriter } from '../property/PropertyWriter'
import { JavascriptProperty } from '../property/JsProperties'
import { getSuperClasses } from './index'
import { MixinModuleBase } from './MixinModuleBase'

export class MixinModule extends MixinModuleBase<ResourceType> {
  superClasses: Array<ResourceType | ExternalResourceType>
  properties: JavascriptProperty[]

  public constructor(clas: GraphPointer, type: ResourceType, superClasses: (ResourceType | ExternalResourceType)[], properties: JavascriptProperty[]) {
    super(clas, type)
    this.superClasses = superClasses
    this.superClasses.forEach(this.addMixinImport.bind(this))
    this.properties = properties
  }

  writeModule(params: { project: Project; types: TypeMetaCollection; context: Pick<Context, 'log' | 'prefix' | 'vocabulary' | 'defaultExport'>; indexModule: SourceFile }) {
    const { project, types, context, indexModule } = params

    context.log.debug(`Generating mixin ${this.type.qualifiedName}`)

    const mixinFile = project.createSourceFile(`${this.type.module}.ts`, {}, { overwrite: true })
    const bundleModule = project.createSourceFile(`bundles/${this.type.term}.ts`, {}, { overwrite: true })
    const bundleIndex = project.getSourceFile('bundles/index.ts') || project.createSourceFile('bundles/index.ts', {}, { overwrite: true })

    const mixinName = this.type.mixinName
    const implName = `${this.type.localName}Impl`
    const interfaceDeclaration = this.createInterface(mixinFile)
    const classDeclaration = this.createMixinFunction(mixinFile, context)

    const propertyWriter = new PropertyWriter({
      interfaceDeclaration,
      classDeclaration,
      context,
      module: this,
    })
    this.properties.forEach(propertyWriter.addProperty.bind(propertyWriter))

    const type = `${context.prefix}.${this.type.localName}`

    const implementationClass = mixinFile.addClass({
      name: implName,
      extends: `${mixinName}(RdfResourceImpl)`,
    })
    implementationClass.addConstructor({
      parameters: [
        { name: 'arg', type: 'ResourceNode' },
        { name: 'init', type: `Initializer<${this.type.localName}>`, hasQuestionToken: true }],
      statements: [
        'super(arg, init)',
        `this.types.add(${type})`,
      ],
    })

    const mixinNames = this.superClasses.reduce((mixins, sc) => {
      return [...mixins, sc.mixinName]
    }, [this.type.mixinName])
    implementationClass.addProperty({
      isStatic: true,
      isReadonly: true,
      name: '__mixins',
      type: 'Mixin[]',
      initializer: `[${mixinNames.join(', ')}]`,
    })

    const nsBuilderTerm = this.type.term === this.type.localName
      ? `${context.prefix}.${this.type.term}`
      : `${context.prefix}['${this.type.term}']`
    mixinFile.addStatements([
      `${mixinName}.appliesTo = ${nsBuilderTerm}`,
      `${mixinName}.Class = ${implName}`,
    ])

    mixinFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{
        name: 'fromPointer',
        initializer: `createFactory<${this.type.localName}>([${mixinNames.reverse().join(', ')}], { types: [${type}] })`,
      }],
    })

    this.addImports(mixinFile, context)
    this.generateDependenciesModule(bundleModule, bundleIndex, types)

    indexModule.addExportDeclaration({
      namedExports: [mixinName],
      moduleSpecifier: this.type.module,
    })

    indexModule.addExportDeclaration({
      namedExports: [this.type.localName],
      moduleSpecifier: this.type.module,
      isTypeOnly: true,
    })
  }

  private generateDependenciesModule(depsModule: SourceFile, bundleIndex: SourceFile, types: TypeMetaCollection) {
    const exports: string[] = []
    const imported: Map<string, ResourceType | ExternalResourceType> = new Map()
    const name = `${this.type.localName}Bundle`

    bundleIndex.addExportDeclaration({
      moduleSpecifier: `./${this.type.term}`,
      namedExports: [name],
    })

    depsModule.addImportDeclaration({
      namedImports: ['Mixin'],
      moduleSpecifier: '@tpluscode/rdfine/lib/ResourceFactory',
      isTypeOnly: true,
    })

    const toImport = this.properties.reduce((toImport, prop) => {
      return prop.range
        .reduce((toImport, range) => {
          if (range.type === 'Resource') {
            toImport.push(range)
          }

          return toImport
        }, toImport)
    }, [...this.mixinImports, this.type])

    while (toImport.length) {
      const next = toImport.splice(0, 1)[0]
      if (imported.has(next.mixinName)) continue

      imported.set(next.mixinName, next)
      getSuperClasses(this.node, types)
        .filter(sc => sc.type === 'Resource')
        .forEach(sc => toImport.push(sc))
    }

    imported
      .forEach(mi => {
        if (mi.type !== 'Resource') {
          return
        }

        depsModule.addImportDeclaration({
          namedImports: [`${mi.mixinName}`],
          moduleSpecifier: `${mi.module.replace('./', '../')}`,
        })
        exports.push(`${mi.mixinName} as Mixin`)
      })

    depsModule.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{
        name,
        initializer: `[\n${exports.join(',\n')}]`,
      }],
    })
  }

  private addImports(mixinFile: SourceFile, context: Omit<Context, 'properties'>) {
    const rdfineImports = ['Constructor', 'namespace', 'RdfResource']

    if (Object.keys(this.properties).some(Boolean)) {
      rdfineImports.push('property')
    }

    mixinFile.addImportDeclaration({
      defaultImport: 'RdfResourceImpl',
      namedImports: rdfineImports,
      moduleSpecifier: '@tpluscode/rdfine',
    })
    mixinFile.addImportDeclaration({
      namedImports: ['createFactory'],
      moduleSpecifier: '@tpluscode/rdfine/factory',
    })

    mixinFile.addImportDeclaration({
      namespaceImport: '$rdf',
      moduleSpecifier: '@rdf-esm/data-model',
    })
    mixinFile.addImportDeclaration({
      namespaceImport: 'RDF',
      moduleSpecifier: 'rdf-js',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namedImports: [context.prefix],
      moduleSpecifier: './namespace',
    })
    mixinFile.addImportDeclaration({
      namedImports: ['Initializer', 'ResourceNode', 'RdfResourceCore'],
      moduleSpecifier: '@tpluscode/rdfine/RdfResource',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namedImports: ['Mixin'],
      moduleSpecifier: '@tpluscode/rdfine/lib/ResourceFactory',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namespaceImport: context.defaultExport,
      moduleSpecifier: '..',
      isTypeOnly: true,
    })

    Object.entries(this.namespaceImports)
      .forEach(([moduleSpecifier, namespaceImport]) => {
        mixinFile.addImportDeclaration({
          moduleSpecifier,
          namespaceImport,
          isTypeOnly: true,
        })
      })

    this.mixinImports
      .filter(imported => imported.type === 'ExternalResource' || this.superClasses.some(sc => sc.mixinName === imported.mixinName))
      .forEach(imported => {
        if (imported.type === 'Resource') {
          mixinFile.addImportDeclaration({
            moduleSpecifier: './' + imported.localName,
            namedImports: [imported.mixinName],
          })
        } else {
          const superImport = mixinFile.addImportDeclaration({
            moduleSpecifier: imported.module,
          })

          superImport.addNamedImport({
            name: imported.exportName,
            alias: imported.mixinName,
          })
        }
      })
  }

  private createMixinFunction(mixinFile: SourceFile, context: Omit<Context, 'properties'>) {
    const mixinFunction = mixinFile.addFunction({
      name: this.type.mixinName,
      typeParameters: [{
        name: 'Base',
        constraint: 'Constructor',
      }],
      parameters: [{
        name: 'Resource',
        type: 'Base',
      }],
      isExported: true,
      returnType: `Constructor<Partial<${this.type.localName}> & RdfResourceCore> & Base`,
    })

    const baseClass = this.superClasses
      .reduce((type, superClass) => `${superClass.mixinName}(${type})`, 'Resource')

    const className = `${this.type.localName}Class`
    const mixinClass = mixinFunction.addClass({
      name: className,
      extends: baseClass,
      implements: [`Partial<${this.type.localName}>`],
    })

    mixinClass.addDecorator({
      name: 'namespace',
      arguments: [context.prefix],
    })

    mixinFunction.addStatements('return ' + className)

    return mixinClass
  }

  private createInterface(mixinFile: SourceFile) {
    const superInterfaces = this.superClasses
      .map(superClass => `${superClass.qualifiedName}<D>`)

    return mixinFile.addInterface({
      name: `${this.type.localName}<D extends RDF.DatasetCore = RDF.DatasetCore>`,
      isExported: true,
      extends: [...superInterfaces, 'RdfResource<D>'],
    })
  }
}
