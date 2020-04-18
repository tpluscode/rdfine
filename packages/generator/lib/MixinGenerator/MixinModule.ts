import { SourceFile } from 'ts-morph'
import { Context, GeneratedModule } from '../index'
import { SingleContextClownface } from 'clownface'
import { ExternalResourceType, ResourceType, TypeMetaCollection } from '../types'
import { PropertyWriter } from '../property/PropertyWriter'
import { JavascriptProperty } from '../property/JsProperties'

export class MixinModule implements GeneratedModule {
  type: ResourceType
  node: SingleContextClownface;
  superClasses: Array<ResourceType | ExternalResourceType>
  properties: JavascriptProperty[]
  private namespaceImports: Record<string, string> = {}
  private mixinImports: Array<ResourceType | ExternalResourceType> = []

  public constructor(clas: SingleContextClownface, type: ResourceType, superClasses: (ResourceType | ExternalResourceType)[], properties: JavascriptProperty[]) {
    this.node = clas
    this.type = type
    this.superClasses = superClasses
    this.superClasses.forEach(this.addMixinImport.bind(this))
    this.properties = properties
  }

  addMixinImport(type: ExternalResourceType | ResourceType) {
    const mixinImportExists = this.mixinImports.find(current => current.module === type.module)
    if (!mixinImportExists) {
      this.mixinImports.push(type)
    }

    if ('package' in type && !this.namespaceImports[type.package]) {
      this.namespaceImports[type.package] = type.qualifier
    }
  }

  writeModule(mixinFile: SourceFile, types: TypeMetaCollection, context: Pick<Context, 'log' | 'prefix' | 'vocabulary' | 'defaultExport'>) {
    context.log.debug(`Generating mixin ${this.type.qualifiedName}`)

    const mixinName = this.type.mixinName
    const interfaceDeclaration = this.createInterface(mixinFile)
    const classDeclaration = this.createMixinFunction(mixinFile, context)

    const propertyWriter = new PropertyWriter({
      interfaceDeclaration,
      classDeclaration,
      context,
      module: this,
    })
    this.properties.forEach(propertyWriter.addProperty.bind(propertyWriter))

    const implementationClass = mixinFile.addClass({
      name: `${this.type.localName}Impl`,
      extends: `${mixinName}(RdfResourceImpl)`,
    })
    implementationClass.addConstructor({
      parameters: [
        { name: 'arg', type: 'ResourceNode' },
        { name: 'init', type: `Initializer<${this.type.localName}>`, hasQuestionToken: true }],
      statements: [
        'super(arg, init)',
        `this.types.add(${context.prefix}.${this.type.localName})`,
      ],
    })

    mixinFile.addStatements([
      `${mixinName}.shouldApply = (r: RdfResource) => r.types.has(${context.prefix}.${this.type.localName})`,
      `${mixinName}.Class = ${this.type.localName}Impl`,
    ])

    this.addImports(mixinFile, context)

    return {
      mainModuleExport: this.type.localName,
      mainModuleMixinExport: mixinName,
    }
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
      namespaceImport: 'RDF',
      moduleSpecifier: 'rdf-js',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namedImports: [context.prefix],
      moduleSpecifier: './lib/namespace',
    })
    mixinFile.addImportDeclaration({
      namedImports: ['Initializer', 'ResourceNode'],
      moduleSpecifier: '@tpluscode/rdfine/RdfResource',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namespaceImport: context.defaultExport,
      moduleSpecifier: '.',
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
    this.mixinImports.forEach(superClass => {
      if (!superClass.module || superClass.module === this.type.module) return

      mixinFile.addImportDeclaration({
        moduleSpecifier: superClass.module,
        defaultImport: superClass.mixinName,
      })
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
      isDefaultExport: true,
    })

    const baseClass = this.superClasses
      .reduce((type, superClass) => {
        return `${superClass.mixinName}(${type})`
      },
      'Resource')

    const className = `${this.type.localName}Class`
    const mixinClass = mixinFunction.addClass({
      name: className,
      extends: baseClass,
      implements: [this.type.localName],
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
      .map(superClass => `${superClass.qualifiedName}`)

    return mixinFile.addInterface({
      name: this.type.localName,
      isExported: true,
      extends: [...superInterfaces, 'RdfResource'],
    })
  }
}
