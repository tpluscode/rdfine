import { RdfResource } from '../../../RdfResource'
import { Literal, NamedNode, Term } from 'rdf-js'
import { fromLiteral } from '../../conversion'
import { xsd } from '@tpluscode/rdf-ns-builders'
import rdf from '@rdf-esm/data-model'
import type { AccessorOptions, ObjectOrFactory } from '.'
import { propertyDecorator } from '.'

interface LiteralOptions<R extends RdfResource> {
  type?: BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor
  initial?: ObjectOrFactory<R, string | boolean | number | bigint | Date, Literal>
  datatype?: NamedNode
}

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

type LiteralValues = string | number | boolean | bigint | Date

export default function<R extends RdfResource> (options: AccessorOptions & LiteralOptions<R> = {}) {
  const type = options.type || String

  return propertyDecorator<R, LiteralValues, Literal>({
    ...options,
    fromTerm(obj) {
      return fromLiteral(type, obj)
    },
    toTerm(value) {
      let datatype = options.datatype
      let literal = value.toString()

      if (!datatype) {
        switch (typeof value) {
          case 'number':
            if (Number.isInteger(value)) {
              datatype = xsd.integer
            } else {
              datatype = xsd.float
            }
            break
          case 'boolean':
            datatype = trueLiteral.datatype
            break
          case 'bigint':
            datatype = xsd.long
            break
          default: {
            if (value instanceof Date) {
              datatype = xsd.dateTime
            }
          }
        }
      }

      if (value instanceof Date) {
        literal = value.toISOString()
        if (xsd.date.equals(datatype)) {
          literal = literal.substr(0, 10)
        }
      }

      return rdf.literal(literal, datatype)
    },
    valueTypeName: type.name,
    assertSetValue: (value) => {
      if (value instanceof Date) {
        return true
      }

      if (typeof value === 'object') {
        let term: Term
        if ('id' in value) {
          return false
        }

        if ('term' in value) {
          term = value.term
        } else {
          term = value
        }

        return term.termType === 'Literal'
      }

      return true
    },
    compare(left, right) {
      return left === right
    },
  })
}
