import { rdfs } from '@tpluscode/rdf-ns-builders'
import { TypeMetaCollection } from '../types'
import { Context, GeneratedModule } from '../index'
import { prefixes, shrink } from '@zazuko/rdf-vocabularies'
import TermMap from '@rdfjs/term-map'
import { NamedNode } from 'rdf-js'
import { GraphPointer } from 'clownface'
import { ExtensionModule } from './ExtensionModule'
import { toJavascriptProperties } from '../property/JsProperties'
import { findRanges } from '../property'
import { ExtensionIndexModule } from './ExtensionIndexModule'

interface AddToMapParams {
  property: GraphPointer
  domain: GraphPointer
  types: TypeMetaCollection
  context: Pick<Context, 'properties' | 'log'>
}

function addExtension(extensions: Map<NamedNode, ExtensionModule>, { property, domain, types, context }: AddToMapParams) {
  const type = types.get(domain)

  if (!(domain.term.termType === 'NamedNode' && type?.type === 'ExternalResource')) {
    return false
  }

  let module = extensions.get(domain.term)
  if (!module) {
    module = new ExtensionModule({ domain, type })
    extensions.set(domain.term, module)
  }
  module.addProperties(...toJavascriptProperties(property, findRanges(property), types, context))

  return true
}

export function findTermsToGenerate(types: TypeMetaCollection, context: Pick<Context, 'vocabulary' | 'log' | 'properties' | 'prefix'>): GeneratedModule[] {
  const extensions = new TermMap<NamedNode, ExtensionModule>()
  const extendedTerms = new Map<string, Set<string>>()

  const extendingProperties = context.vocabulary.has(rdfs.domain)
  for (const property of extendingProperties.toArray()) {
    for (const domain of property.out(rdfs.domain).toArray()) {
      const [prefix, term] = shrink(domain.value).split(':')
      if (domain.value.startsWith(prefixes[context.prefix])) {
        continue
      }

      if (!types.get(domain)) {
        context.log.debug(`Skipping extensions of ignored type ${domain.value}`)
        continue
      }

      if (!(prefix in prefixes)) {
        context.log.warn(`Extended term from unknown vocabulary: ${domain.value}`)
        continue
      }

      const added = addExtension(extensions, {
        property,
        domain,
        types,
        context,
      })

      if (added) {
        const extendedTermFromPrefix = extendedTerms.get(prefix) || new Set()
        extendedTermFromPrefix.add(term)
        extendedTerms.set(prefix, extendedTermFromPrefix)
      }
    }
  }

  const indexModules = [...extendedTerms].map(([prefix, terms]) => new ExtensionIndexModule(prefix, [...terms]))

  return [
    ...extensions.values(),
    ...indexModules,
  ]
}
