import { rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import { Context, GeneratedModule, ModuleStrategy } from '../index'
import { EnumerationModule } from './EnumerationModule'
import { TypeMetaCollection } from '../types'

export class EnumerationGenerator implements ModuleStrategy {
  findTermsToGenerate(types: TypeMetaCollection, context: Context): GeneratedModule[] {
    return context.vocabulary
      .has(rdf.type, rdfs.Class)
      .filter(term => types.get(term)?.type === 'Enumeration')
      .map(enumeration => {
        const meta = types.getOrThrow(enumeration)
        if (meta.type !== 'Enumeration') {
          throw new Error(`Expected to find an Enumeration type by got '${meta.type}'`)
        }

        return new EnumerationModule(enumeration, meta)
      })
  }
}
