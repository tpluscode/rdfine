import { SingleContextClownface } from 'clownface'
import { Context, ModuleStrategy } from '../index'
import { rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import { ExternalResourceType, ResourceType, TypeMetaCollection } from '../types'
import { MixinModule } from './MixinModule'
import { findProperties } from '../property'
import { toJavascriptProperties } from '../property/JsProperties'

export class MixinGenerator implements ModuleStrategy {
  findTermsToGenerate(types: TypeMetaCollection, context: Context) {
    return context.vocabulary
      .has(rdf.type, rdfs.Class)
      .filter(term => types.get(term)?.type === 'Resource')
      .map(term => {
        const meta = types.getOrThrow(term)
        if (meta.type !== 'Resource') {
          throw new Error(`Expected resource type but got ${meta.type}`)
        }

        return new MixinModule(
          term,
          meta,
          this.getSuperClasses(term, types),
          [...this.getProperties(term, types, context)])
      })
  }

  getSuperClasses(clas: SingleContextClownface, types: TypeMetaCollection) {
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

  * getProperties(clas: SingleContextClownface, types: TypeMetaCollection, context: Context) {
    for (const { term, range } of findProperties(clas, context)) {
      for (const jsProperty of toJavascriptProperties(term, range, types, context)) {
        yield jsProperty
      }
    }
  }
}
