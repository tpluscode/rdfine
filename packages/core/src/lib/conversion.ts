import { Literal } from 'rdf-js'
import rdf from '@rdfjs/data-model'
import { xsd } from './vocabs'
import { SingleContextClownface } from 'clownface'

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

export function fromLiteral(type: BooleanConstructor | StringConstructor | NumberConstructor, obj: SingleContextClownface) {
  if (type === Boolean) {
    return trueLiteral.equals(obj.term)
  }

  if (type === Number) {
    return Number.parseFloat(obj.value)
  }

  return obj.value
}
