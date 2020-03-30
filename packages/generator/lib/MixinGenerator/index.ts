import { SingleContextClownface } from 'clownface'
import { Context } from '../index'
import { rdf, rdfs, hydra } from '@tpluscode/rdf-ns-builders'
import { ExternalResourceType, ResourceType, TypeMetaCollection } from '../types'
import { MixinModule } from './MixinModule'
import { findProperties } from '../property'
import { toJavascriptProperties } from '../property/JsProperties'

function getSuperClasses(clas: SingleContextClownface, types: TypeMetaCollection) {
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

function * getProperties(clas: SingleContextClownface, types: TypeMetaCollection, context: Context) {
  for (const { term, range } of findProperties(clas, context)) {
    for (const jsProperty of toJavascriptProperties(term, range, types, context)) {
      yield jsProperty
    }
  }
}

export function findTermsToGenerate(types: TypeMetaCollection, context: Context) {
  return context.vocabulary
    .has(rdf.type, [rdfs.Class, hydra.Class])
    .filter(term => types.get(term)?.type === 'Resource')
    .map(term => {
      const meta = types.getOrThrow(term)
      if (meta.type !== 'Resource') {
        throw new Error(`Expected resource type but got ${meta.type}`)
      }

      return new MixinModule(
        term,
        meta,
        getSuperClasses(term, types),
        [...getProperties(term, types, context)])
    })
}
