import { ClassDeclaration, DecoratorStructure, InterfaceDeclaration, OptionalKind } from 'ts-morph'
import { JavascriptProperty } from './JsProperties'
import { Context } from '../index'
import { TypeMeta } from '../types'

interface PropertyWriterInit {
  interfaceDeclaration: InterfaceDeclaration
  classDeclaration: ClassDeclaration
  context: Context
}

export class PropertyWriter {
  private readonly __interface: InterfaceDeclaration;
  private readonly __class: ClassDeclaration;
  private readonly __context: Context

  public constructor({ interfaceDeclaration, classDeclaration, context }: PropertyWriterInit) {
    this.__interface = interfaceDeclaration
    this.__class = classDeclaration
    this.__context = context
  }

  public addProperty(prop: JavascriptProperty) {
    let type
    let rdfTerm = false
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
      type = 'rdf.Term'
      rdfTerm = true
      this.__context.log.warn('Could not determine types for property %s', prop.id)
    } else {
      if (propertyTypes.includes('rdf.NamedNode')) {
        if (propertyTypes.length > 1) {
          propertyTypes.splice(propertyTypes.indexOf('rdf.NamedNode'), 1, 'RdfResource')
        } else {
          rdfTerm = true
        }
      }

      type = propertyTypes.join(' | ')
      this.__context.log.debug('Generating Property %s => %s: %s', prop.term, prop.name, type)
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

    classProp.addDecorator(this.__createDecorator(prop, propertyTypes, rdfTerm))
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
        return `rdf.${range.termType}`
    }

    return null
  }

  private __createDecorator(prop: JavascriptProperty, propertyTypes: string[], rdfTerm: boolean): OptionalKind<DecoratorStructure> {
    let name: string
    const decoratorOptions: string[] = []
    if (prop.name !== prop.term) {
      decoratorOptions.push(`path: ${this.__context.prefix}.${prop.term}`)
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
