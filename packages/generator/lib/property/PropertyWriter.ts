import { ClassDeclaration, DecoratorStructure, InterfaceDeclaration, OptionalKind } from 'ts-morph'
import { JavascriptProperty } from './JsProperties'
import { Context } from '../index'
import { TypeMeta } from '../types'
import { MixinModule } from '../MixinGenerator/MixinModule'

interface PropertyWriterInit {
  interfaceDeclaration: InterfaceDeclaration
  classDeclaration: ClassDeclaration
  context: Omit<Context, 'properties'>
  module: MixinModule
}

export class PropertyWriter {
  private readonly __interface: InterfaceDeclaration;
  private readonly __class: ClassDeclaration;
  private readonly __context: Omit<Context, 'properties'>
  private readonly __module: MixinModule;

  public constructor({ interfaceDeclaration, classDeclaration, context, module }: PropertyWriterInit) {
    this.__interface = interfaceDeclaration
    this.__class = classDeclaration
    this.__context = context
    this.__module = module
  }

  public addProperty(prop: JavascriptProperty) {
    let type
    const propertyTypes = prop.range
      .reduce<string[]>((result, range) => {
      const returnType = this.__getJsReturnType(range)
      if (returnType && !result.includes(returnType)) {
        result.push(returnType)
      }

      return result
    }, [])
      .sort((l, r) => l.localeCompare(r))

    if (propertyTypes.length === 0) {
      type = 'RDF.Term'
      this.__context.log.warn('Could not determine types for property %s', prop.term.value)
    } else {
      if (propertyTypes.includes('rdf.NamedNode')) {
        if (propertyTypes.length > 1) {
          propertyTypes.splice(propertyTypes.indexOf('rdf.NamedNode'), 1, 'RdfResource')
        }
      }

      type = propertyTypes.join(' | ')
      this.__context.log.debug('Generating Property %s => %s: %s', prop.term.value, prop.name, type)
    }

    if (prop.values) {
      type = `Array<${type}>`
    }

    this.__interface.addProperty({
      name: prop.name,
      type,
    })

    const classProp = this.__class.addProperty({
      name: prop.name,
      hasExclamationToken: true,
      type,
    })

    classProp.addDecorator(this.__createDecorator(prop, propertyTypes))
  }

  private __getJsReturnType(range: TypeMeta): string | null {
    switch (range.type) {
      case 'Literal':
        return range.nativeName
      case 'Resource':
      case 'ExternalResource':
      case 'Enumeration':
        return range.qualifiedName
      case 'Term':
        return `RDF.${range.termType}`
    }

    return null
  }

  private __createDecorator(prop: JavascriptProperty, propertyTypes: string[]): OptionalKind<DecoratorStructure> {
    let name: string
    const decoratorOptions: string[] = []
    if (prop.name !== prop.termName) {
      decoratorOptions.push(`path: ${prop.prefixedTerm}`)
    }

    if (prop.values) {
      decoratorOptions.push(`values: '${prop.values}'`)
    }

    if (prop.semantics === 'strict' && prop.range.length === 1) {
      const resourceRange = prop.range[0]
      if (resourceRange.type === 'Resource') {
        this.__module.addMixinImport(resourceRange)
        decoratorOptions.push(`implicitTypes: [${this.__context.prefix}.${resourceRange.localName}]`)
      } else if (resourceRange.type === 'ExternalResource') {
        this.__module.addMixinImport(resourceRange)
        decoratorOptions.push(`as: [${resourceRange.alias}]`)
      }
    }

    switch (prop.type) {
      case 'literal': {
        name = 'property.literal'

        const uniqueTypes = [...new Set(propertyTypes)]

        if (uniqueTypes.length === 1) {
          switch (uniqueTypes.shift()) {
            case 'boolean':
              decoratorOptions.push('type: Boolean')
              break
            case 'number':
              decoratorOptions.push('type: Number')
              break
          }
        }
      }
        break
      case 'resource':
        name = 'property.resource'
        break
      case 'term':
        name = 'property'
        break
    }

    return {
      name,
      arguments: Object.keys(decoratorOptions).length ? [`{ ${decoratorOptions.join(', ')} }`] : [],
    }
  }
}
