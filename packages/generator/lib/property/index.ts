import { SingleContextClownface } from 'clownface'
import { Context } from '../index'
import { schema } from '@tpluscode/rdf-ns-builders'
import nameOf from '../util/nameOf'
import { isDatatype } from '../util/subClasses'

export interface EntityRange {
  type: SingleContextClownface
  isLiteral: boolean
}

export interface EntityProperty {
  name: string
  range: EntityRange[]
}

export interface RangeMapper {
  (range: EntityRange): string | null
}

export function findProperties({ clas }: {clas: SingleContextClownface}, context: Context): EntityProperty[] {
  return context.vocabulary.has(schema.domainIncludes, clas)
    .map(prop => ({
      name: nameOf.term(prop),
      range: prop.out(schema.rangeIncludes).map(range => ({
        type: range,
        isLiteral: isDatatype(range, context.datatypeMappings),
      })),
    }))
    .sort((left, right) => {
      return left.name.localeCompare(right.name)
    })
}
