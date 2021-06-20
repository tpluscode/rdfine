import { GraphPointer } from 'clownface'
import { Context } from '../index'
import { rdf, rdfs, hydra, owl } from '@tpluscode/rdf-ns-builders'
import { ExternalResourceType, ResourceType, TypeMetaCollection } from '../types'
import { MixinModule } from './MixinModule'
import { findProperties } from '../property'
import { toJavascriptProperties } from '../property/JsProperties'
import { NamedNode } from '@rdfjs/types'
import TermSet from '@rdfjs/term-set'
import TermMap from '@rdfjs/term-map'

export function getSuperClasses(clas: GraphPointer, types: TypeMetaCollection) {
  return clas.out(rdfs.subClassOf)
    .toArray()
    .reduce<(ResourceType | ExternalResourceType)[]>((selected, candidate) => {
    const found = types.get(candidate)
    if (found && (found.type === 'Resource' || found.type === 'ExternalResource')) {
      selected.push(found)
    }

    return selected
  }, [])
}

function * getProperties(clas: GraphPointer, types: TypeMetaCollection, context: Context, excludedTerms: TermSet) {
  for (const { term, range } of findProperties(clas, context)) {
    if (excludedTerms.has(term.term)) continue

    for (const jsProperty of toJavascriptProperties(term, range, types, context)) {
      yield jsProperty
    }
  }
}

export function findTermsToGenerate(excludedTerms: NamedNode[]) {
  const excluded = new TermSet(excludedTerms)

  return function (types: TypeMetaCollection, context: Context) {
    const terms = new TermMap(context.vocabulary
      .has(rdf.type, [rdfs.Class, hydra.Class, owl.Class])
      .filter(term => types.get(term)?.type === 'Resource')
      .map(pointer => [pointer.term, pointer]))

    return [...terms]
      .map(([, term]) => {
        const meta = types.getOrThrow(term)
        if (meta.type !== 'Resource') {
          throw new Error(`Expected resource type but got ${meta.type}`)
        }

        const props = [...getProperties(term, types, context, excluded)]
        return new MixinModule(
          term,
          meta,
          getSuperClasses(term, types),
          props)
      })
  }
}
