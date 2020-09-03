import { ClassDeclaration, DecoratorStructure, InterfaceDeclaration, OptionalKind } from 'ts-morph'
import { JavascriptProperty } from './JsProperties'
import { Context } from '../index'
import { TypeMeta, LiteralType } from '../types'
import { MixinModule } from '../MixinGenerator/MixinModule'
import TermSet from '@rdfjs/term-set'

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

    if (prop.values?.includes('list') || prop.values?.includes('array')) {
      if (prop.values?.includes('single')) {
        type = `${type} | Array<${type}>`
      } else {
        type = `Array<${type}>`
      }
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
      if (prop.values.length === 1) {
        decoratorOptions.push(`values: '${prop.values}'`)
      } else {
        decoratorOptions.push(`values: [${prop.values.map(v => `'${v}'`).join(', ')}]`)
      }
    }

    if (prop.semantics === 'strict' && prop.range.length === 1) {
      const resourceRange = prop.range[0]
      if (resourceRange.type === 'Resource') {
        this.__module.addMixinImport(resourceRange)

        if (this.__module.type.localName === resourceRange.localName) {
          decoratorOptions.push(`as: [${resourceRange.mixinName}]`)
        } else {
          decoratorOptions.push(`implicitTypes: [${this.__context.prefix}.${resourceRange.localName}]`)
        }
      } else if (resourceRange.type === 'ExternalResource') {
        this.__module.addMixinImport(resourceRange)
        decoratorOptions.push(`as: [${resourceRange.qualifiedMixinName}]`)
      }
    }

    switch (prop.type) {
      case 'literal': {
        name = 'property.literal'

        const uniqueTypes = [...new Set(propertyTypes)]
        const uniqueDatatypes = prop.range.reduce<TermSet>((set, range: LiteralType | object) => {
          if ('datatype' in range && range.datatype) {
            set.add(range.datatype)
          }
          return set
        }, new TermSet())

        if (uniqueTypes.length === 1) {
          switch (uniqueTypes.shift()) {
            case 'boolean':
              decoratorOptions.push('type: Boolean')
              break
            case 'number':
              decoratorOptions.push('type: Number')
              break
            case 'Date':
              decoratorOptions.push('type: Date')
              break
          }
        }

        if (uniqueDatatypes.size === 1) {
          const [datatype] = [...uniqueDatatypes.values()]
          decoratorOptions.push(`datatype: $rdf.namedNode('${datatype.value}')`)
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
