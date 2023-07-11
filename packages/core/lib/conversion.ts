import type { Literal, NamedNode } from '@rdfjs/types'
import { xsd } from '@tpluscode/rdf-ns-builders'
import { GraphPointer } from 'clownface'
import {RdfineEnvironment} from '../environment';

export function fromLiteral(this: RdfineEnvironment,type: BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor, obj: GraphPointer) {
  if (type === Boolean) {
    return this.literal('true', xsd.boolean).equals(obj.term)
  }

  if (type === Number) {
    return Number.parseFloat(obj.value)
  }

  if (type === Date) {
    return new Date(Date.parse(obj.value))
  }

  return obj.value
}

export function toLiteral(this: RdfineEnvironment, value: boolean | string | number | Date | bigint | unknown, datatype?: NamedNode): Literal | undefined {
  switch (typeof value) {
    case 'boolean':
      return this.literal(value.toString(), datatype || xsd.boolean)
    case 'number':
      return this.literal(value.toString(), datatype || (Number.isInteger(value) ? xsd.integer : xsd.float))
    case 'bigint':
      return this.literal(value.toString(), datatype || xsd.long)
    case 'string':
      return this.literal(value, datatype)
    case 'object':
      if (value instanceof Date) {
        const literal = value.toISOString()
        if (xsd.date.equals(datatype)) {
          return this.literal(literal.substr(0, 10), xsd.date)
        }

        return this.literal(literal, datatype || xsd.dateTime)
      }
      break
  }

  return undefined
}
