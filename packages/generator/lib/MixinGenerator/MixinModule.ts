import { SourceFile } from 'ts-morph'
import { Context, GeneratedModule } from '../index'
import { SingleContextClownface } from 'clownface'
import { ExternalResourceType, ResourceType, TypeMetaCollection } from '../types'
import { PropertyWriter } from '../property/PropertyWriter'
import { JavascriptProperty } from '../property/JsProperties'

export class MixinModule implements GeneratedModule {
  type: ResourceType
  node: SingleContextClownface;
  superClasses: (ResourceType | ExternalResourceType)[]
  properties: JavascriptProperty[]

  public constructor(clas: SingleContextClownface, type: ResourceType, superClasses: (ResourceType | ExternalResourceType)[], properties: JavascriptProperty[]) {
    this.node = clas
    this.type = type
    this.superClasses = superClasses
    this.properties = properties
  }

  writeModule(mixinFile: SourceFile, types: TypeMetaCollection, context: Context) {
    context.log.debug(`Generating mixin ${this.type.qualifiedName}`)

    const rdfineImports = ['Constructor', 'namespace', 'RdfResource', 'RdfResourceImpl']
    const mixinName = this.type.mixinName

    if (Object.keys(this.properties).some(Boolean)) {
      rdfineImports.push('property')
    }

    mixinFile.addImportDeclaration({
      namedImports: rdfineImports,
      moduleSpecifier: '@tpluscode/rdfine',
    })
    mixinFile.addImportDeclaration({
      namespaceImport: 'rdf',
      moduleSpecifier: 'rdf-js',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namedImports: [context.prefix],
      moduleSpecifier: './lib/namespace',
    })
    mixinFile.addImportDeclaration({
      namedImports: ['Initializer', 'ResourceNode'],
      moduleSpecifier: '@tpluscode/rdfine/lib/RdfResource',
      isTypeOnly: true,
    })
    mixinFile.addImportDeclaration({
      namespaceImport: context.defaultExport,
      moduleSpecifier: '.',
      isTypeOnly: true,
    })
    this.superClasses.forEach(superClass => {
      if (!superClass.module) return

      mixinFile.addImportDeclaration({
        moduleSpecifier: superClass.module,
        defaultImport: superClass.mixinName,
      })
    })

    const interfaceDeclaration = this.createInterface(mixinFile)
    const classDeclaration = this.createMixinFunction(mixinFile, context)

    const propertyWriter = new PropertyWriter({
      interfaceDeclaration,
      classDeclaration,
      context,
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

    return {
      mainModuleExport: this.type.localName,
      mainModuleMixinExport: mixinName,
    }
  }

  private createMixinFunction(mixinFile: SourceFile, context: Context) {
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
