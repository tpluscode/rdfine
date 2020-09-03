import { Literal } from 'rdf-js'
import rdf from '@rdf-esm/data-model'
import { xsd } from '@tpluscode/rdf-ns-builders'
import { GraphPointer } from 'clownface'

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

export function fromLiteral(type: BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor, obj: GraphPointer) {
  if (type === Boolean) {
    return trueLiteral.equals(obj.term)
  }

  if (type === Number) {
    return Number.parseFloat(obj.value)
  }

  if (type === Date) {
    return new Date(Date.parse(obj.value))
  }

  return obj.value
}
