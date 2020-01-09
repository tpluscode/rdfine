import { Literal } from 'rdf-js'
import rdf from 'rdf-data-model'
import { xsd } from './vocabs'
import { SingleContextClownface } from 'clownface'
import { Constructor, Mixin } from './ResourceFactory'
import { RdfResource } from './RdfResource'

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

export function fromResource(parent: RdfResource, obj: SingleContextClownface, mixins?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]) {
  const constructor: Constructor & Function = parent.constructor as Constructor
  if ('factory' in constructor) {
    return constructor.factory.createEntity(obj, mixins)
  }

  throw new Error(`The class ${constructor.name} does not implement a static 'factory' property`)
}