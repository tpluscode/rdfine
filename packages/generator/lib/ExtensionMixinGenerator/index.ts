import { rdfs } from '@tpluscode/rdf-ns-builders'
import { TypeMetaCollection } from '../types'
import { Context } from '../index'
import { prefixes, shrink } from '@zazuko/rdf-vocabularies'
import TermMap from '@rdfjs/term-map'
import { NamedNode } from 'rdf-js'
import { GraphPointer } from 'clownface'
import { ExtensionModule } from './ExtensionModule'
import { toJavascriptProperties } from '../property/JsProperties'
import { findRanges } from '../property'

interface AddToMapParams {
  property: GraphPointer
  domain: GraphPointer
  types: TypeMetaCollection
  context: Pick<Context, 'properties' | 'log'>
}

function addExtension(extensions: Map<NamedNode, ExtensionModule>, { property, domain, types, context }: AddToMapParams) {
  const type = types.get(domain)

  if (domain.term.termType === 'NamedNode' && type?.type === 'ExternalResource') {
    let module = extensions.get(domain.term)
    if (!module) {
      module = new ExtensionModule({ domain, type })
      extensions.set(domain.term, module)
    }

    module.addProperties(...toJavascriptProperties(property, findRanges(property), types, context))
  }
}

export function findTermsToGenerate(types: TypeMetaCollection, context: Pick<Context, 'vocabulary' | 'log' | 'properties' | 'prefix'>): ExtensionModule[] {
  const extensions = new TermMap<NamedNode, ExtensionModule>()

  const extendingProperties = context.vocabulary.has(rdfs.domain)
  for (const property of extendingProperties.toArray()) {
    for (const domain of property.out(rdfs.domain).toArray()) {
      const [prefix] = shrink(domain.value).split(':')
      if (prefix in prefixes) {
        if (!domain.value.startsWith(context.prefix)) {
          addExtension(extensions, {
            property,
            domain,
            types,
            context,
          })
        }
      }
    }
  }

  return [...extensions.values()]
}
