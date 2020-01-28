import { SingleContextClownface } from 'clownface'
import { RdfResource } from '../../RdfResource'
import { Literal, NamedNode, Term } from 'rdf-js'
import { fromLiteral } from '../../conversion'
import { xsd } from '../../vocabs'
import rdf from '@rdfjs/data-model'
import { AccessorOptions, ObjectOrFactory, propertyDecorator } from '../property'

interface LiteralOptions<R extends RdfResource> {
  type?: typeof Boolean | typeof String | typeof Number
  initial?: ObjectOrFactory<R, string | boolean | number | bigint | Literal>
}

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

export default function<R extends RdfResource> (options: AccessorOptions & LiteralOptions<R> = {}) {
  const type = options.type || String

  return propertyDecorator<Term | SingleContextClownface | string | number | boolean | bigint, Literal>({
    ...options,
    fromTerm(obj) {
      return fromLiteral(type, obj)
    },
    toTerm(value: any) {
      let datatype: NamedNode | undefined
      if (type === Boolean) {
        datatype = trueLiteral.datatype
      }
      if (type === Number && Number.isInteger(value)) {
        datatype = xsd.integer
      } else if (type === Number) {
        datatype = xsd.float
      }

      return rdf.literal(value.toString(), datatype)
    },
    valueTypeName: type.name,
    assertSetValue: (value: Term | SingleContextClownface | string | number | boolean | bigint) => {
      if (typeof value === 'object') {
        const term = 'term' in value ? value.term : value

        return term.termType === 'Literal'
      }

      return true
    },
  })
}
