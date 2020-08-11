import { RdfResource } from '../../../RdfResource'
import { Literal, NamedNode, Term } from 'rdf-js'
import { fromLiteral } from '../../conversion'
import { xsd } from '@tpluscode/rdf-ns-builders'
import rdf from '@rdfjs/data-model'
import type { AccessorOptions, ObjectOrFactory } from '.'
import { propertyDecorator } from '.'

interface LiteralOptions<R extends RdfResource> {
  type?: typeof Boolean | typeof String | typeof Number
  initial?: ObjectOrFactory<R, string | boolean | number | bigint, Literal>
  datatype?: NamedNode
}

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

type LiteralValues = string | number | boolean | bigint

export default function<R extends RdfResource> (options: AccessorOptions & LiteralOptions<R> = {}) {
  const type = options.type || String

  return propertyDecorator<R, LiteralValues, Literal>({
    ...options,
    fromTerm(obj) {
      return fromLiteral(type, obj)
    },
    toTerm(value) {
      let datatype = options.datatype
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
        }
      }

      return rdf.literal(value.toString(), datatype)
    },
    valueTypeName: type.name,
    assertSetValue: (value) => {
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
