import { ClassDeclaration, DecoratorStructure, InterfaceDeclaration, OptionalKind } from 'ts-morph'
import { EntityProperty, RangeMapper } from './index'
import { fromEntityProperty, JavascriptProperty } from './JsProperties'
import { Context } from '../index'
import nameOf from '../util/nameOf'

interface PropertyWriterInit {
  interfaceDeclaration: InterfaceDeclaration
  classDeclaration: ClassDeclaration
  rangeMappers: RangeMapper[]
  context: Context
}

export class PropertyWriter {
  private readonly __interface: InterfaceDeclaration;
  private readonly __class: ClassDeclaration;
  private readonly __rangeMappers: RangeMapper[]
  private readonly __context: Context

  public constructor({ interfaceDeclaration, classDeclaration, rangeMappers, context }: PropertyWriterInit) {
    this.__interface = interfaceDeclaration
    this.__class = classDeclaration
    this.__rangeMappers = rangeMappers
    this.__context = context
  }

  public addProperty(prop: EntityProperty): void {
    const jsProps = fromEntityProperty(prop)

    ;[...jsProps].forEach(jsProp => this.__addProperty(jsProp))
  }

  private __addProperty(prop: JavascriptProperty) {
    let type
    let rdfTerm = false
    const propertyTypes = prop.range
      .filter(range => !this.__context.excludedTypes.includes(nameOf.term(range.type)))
      .map(range => this.__rangeMappers.map(toReturnType => toReturnType(range)).filter(Boolean).shift())
      .filter(Boolean) as string[]

    if (propertyTypes.length === 0) {
      type = 'rdf.Term'
      rdfTerm = true
      this.__context.log.warn('Could not determine types for property %s', prop.name)
    } else {
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

  private __createDecorator(prop: JavascriptProperty, propertyTypes: string[], rdfTerm: boolean): OptionalKind<DecoratorStructure> {
    if (rdfTerm) {
      return {
        name: 'property',
        arguments: [],
      }
    }

    if (prop.type === 'resource') {
      return {
        name: 'property.resource',
        arguments: [],
      }
    }

    if (prop.type === 'term') {
      return {
        name: 'property',
        arguments: [],
      }
    }

    const decoratorOptions: string[] = []
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

    if (prop.addPath) {
      decoratorOptions.push(`path: ${this.__context.prefix}.${prop.term}`)
    }

    return {
      name: 'property.literal',
      arguments: Object.keys(decoratorOptions).length ? [`{ ${decoratorOptions.join(', ')} }`] : [],
    }
  }
}
