import type { Literal, NamedNode } from '@rdfjs/types'
import { xsd } from '@tpluscode/rdf-ns-builders'
import { GraphPointer } from 'clownface'
import rdf from '@rdfjs/data-model'

export function fromLiteral(type: BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor, obj: GraphPointer) {
  if (type === Boolean) {
    return rdf.literal('true', xsd.boolean).equals(obj.term)
  }

  if (type === Number) {
    return Number.parseFloat(obj.value)
  }

  if (type === Date) {
    return new Date(Date.parse(obj.value))
  }

  return obj.value
}

export function toLiteral(value: boolean | string | number | Date | bigint | unknown, datatype?: NamedNode): Literal | undefined {
  switch (typeof value) {
    case 'boolean':
      return rdf.literal(value.toString(), datatype || xsd.boolean)
    case 'number':
      return rdf.literal(value.toString(), datatype || (Number.isInteger(value) ? xsd.integer : xsd.float))
    case 'bigint':
      return rdf.literal(value.toString(), datatype || xsd.long)
    case 'string':
      return rdf.literal(value, datatype)
    case 'object':
      if (value instanceof Date) {
        const literal = value.toISOString()
        if (xsd.date.equals(datatype)) {
          return rdf.literal(literal.substr(0, 10), xsd.date)
        }

        return rdf.literal(literal, datatype || xsd.dateTime)
      }
      break
  }

  return undefined
}
