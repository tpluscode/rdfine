import { RdfResourceCore } from '../../../RdfResource'
import { Literal, NamedNode, Term } from 'rdf-js'
import { fromLiteral, toLiteral } from '../../conversion'
import type { AccessorOptions, ObjectOrFactory } from '.'
import { propertyDecorator } from '.'

interface LiteralOptions<R extends RdfResourceCore> {
  type?: BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor
  initial?: ObjectOrFactory<R, string | boolean | number | bigint | Date, Literal>
  datatype?: NamedNode
}

type LiteralValues = string | number | boolean | bigint | Date

export default function<R extends RdfResourceCore> (options: AccessorOptions & LiteralOptions<R> = {}) {
  const type = options.type || String

  return propertyDecorator<R, LiteralValues, Literal>({
    ...options,
    fromTerm(obj) {
      return fromLiteral(type, obj)
    },
    toTerm(value) {
      return toLiteral(value, options.datatype)!
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
