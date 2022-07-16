import type { RdfResource } from '@tpluscode/rdfine'
import type { AnyPointer } from 'clownface';
import URITemplate from 'es6-url-template'
import { IriTemplate, IriTemplateMapping } from '../'
import type { Term } from '@rdfjs/types'
import { hydra } from '../lib/namespace';
import { xsd } from '@tpluscode/rdf-ns-builders';

interface TemplateValueMapper {
  mapValue(term: Term): string;
}

class BasicRepresentationMapper implements TemplateValueMapper {
  mapValue(term: Term): string {
    return term.value;
  }
}

class ExplicitRepresentationMapper implements TemplateValueMapper {
  mapValue(term: Term): string {
    let explicitRepresentation
    switch (term.termType) {
      case 'NamedNode':
        explicitRepresentation = term.value
        break;
      case 'Literal':
        if (!term.datatype || term.datatype.equals(xsd.string)) {
          explicitRepresentation = `"${term.value}"`
        } else if (term.language) {
          explicitRepresentation = `"${term.value}"@${term.language}`
        } else {
          explicitRepresentation = `"${term.value}"^^${term.datatype.value}`
        }
        break;
      default:
        throw new Error(`Cannot use term ${term.termType} for template variable expansion`)
    }

    return decodeURIComponent(explicitRepresentation);
  }
}

export class TemplateExpander {
  private readonly __template: IriTemplate
  private readonly __mapper: TemplateValueMapper

  constructor(template: IriTemplate) {
    this.__template = template

    if (template.variableRepresentation?.equals(hydra.ExplicitRepresentation)) {
      this.__mapper = new ExplicitRepresentationMapper()
    } else {
      this.__mapper = new BasicRepresentationMapper()
    }
  }

  public expand(baseOrFirst: undefined | string | AnyPointer | RdfResource, ...models: Array<AnyPointer | RdfResource>): string {
    if (!this.__template.template) {
      return ''
    }

    let base = ''
    let expansionModels: Array<AnyPointer | RdfResource>
    if (typeof baseOrFirst === 'string') {
      base = baseOrFirst
      expansionModels = models
    } else {
      const parent = this.findNamedParent()
      if (parent) {
        base = parent.id.value
      }
      expansionModels = baseOrFirst ? [baseOrFirst, ...models] : models
    }

    const uriTemplate = new URITemplate(this.__template.template)

    const variables = expansionModels.reduce((variables, model) => {
      return {
        ...variables,
        ...this.buildExpansionModel(this.__template.mapping, 'id' in model ? model.pointer : model),
      }
    }, {})
    const expanded = uriTemplate.expand(variables)

    if (base) {
      return new URL(expanded, base).toString()
    }

    return expanded
  }

  private findNamedParent() {
    let parent = this.__template._parent
    do {
      if (parent && !parent.isAnonymous) {
        return parent
      }

      parent = parent?._parent
    } while (parent)

    return undefined
  }

  private buildExpansionModel(mappings: IriTemplateMapping[], templateValues: AnyPointer): Record<string, string[]> {
    return mappings.reduce<Record<string, string[]>>((model, mapping) => {
      const { property, variable } = mapping

      if (!property || !variable) {
        return model
      }

      const values = templateValues.out(property.id)
        .map(({ term }) => this.__mapper.mapValue(term))

      if (values.length === 0) {
        return model
      }

      return {
        ...model,
        [variable]: values,
      }
    }, {})
  }
}
