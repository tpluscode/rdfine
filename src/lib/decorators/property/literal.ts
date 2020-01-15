import { RdfResource } from '../../RdfResource'
import { Literal, NamedNode } from 'rdf-js'
import { fromLiteral } from '../../conversion'
import { xsd } from '../../vocabs'
import rdf from 'rdf-data-model'
import { AccessorOptions, ObjectOrFactory, propertyDecorator } from '../property'

interface LiteralOptions<R extends RdfResource> {
  type?: typeof Boolean | typeof String | typeof Number
  initial?: ObjectOrFactory<R, string | boolean | number | bigint | Literal>
}

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

export default function<R extends RdfResource> (options: AccessorOptions & LiteralOptions<R> = {}) {
  const type = options.type || String

  return propertyDecorator<unknown, Literal>({
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
    assertSetValue: (value: any) => {
      return typeof value !== 'object' || value.termType === 'Literal'
    },
  })
}
