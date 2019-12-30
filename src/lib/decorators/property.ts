import { BlankNode, Literal, NamedNode, Term } from 'rdf-js'
import RdfResource from '../RdfResource'
import { getPath, PropRef } from '../path'
import rdf from 'rdf-data-model'
import { Constructor, Mixin } from '../ResourceFactory'
import { SafeClownface, SingleContextClownface } from 'clownface'
import { xsd } from '../vocabs'

interface AccessorOptions {
  array?: boolean
  path?: PropRef | PropRef[]
  strict?: true
}

function getNode(r: RdfResource, path: NamedNode[]): SafeClownface {
  return path
    .reduce<SafeClownface>((node, prop) => {
    return node.out(prop)
  }, r._node)
}

type ObjectOrFactory<R, T> = T | ((self: R) => T)

interface PropertyDecoratorOptions<T, N> extends AccessorOptions {
  fromTerm: (this: RdfResource, obj: SingleContextClownface) => unknown
  toTerm: (value: T) => Term
  assertSetValue: (value: T | Term) => boolean
  valueTypeName: string
  initial?: ObjectOrFactory<any, T | N>
}

function propertyDecorator<T, N>(options: PropertyDecoratorOptions<T, N>) {
  const { path, array, fromTerm, toTerm, assertSetValue, valueTypeName, initial, strict } = options
  return (protoOrDescriptor: any, name: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get(this: any): any {
        const pathNodes = getPath(protoOrDescriptor, name, path)
        const node = getNode(this, pathNodes)

        const values = node.map(quad => {
          return fromTerm.call(this, quad)
        })

        if (array === true) {
          return values
        }

        if (values.length > 1) {
          throw new Error('Multiple terms found where 0..1 was expected')
        }

        if (strict && values.length === 0) {
          throw new Error(`Object not found for property ${name.toString()}`)
        }

        return values[0]
      },

      set(this: RdfResource, value: T | Term) {
        if (!array && Array.isArray(value)) {
          throw new Error('Cannot set array to a non-array property')
        }

        const pathNodes = getPath(protoOrDescriptor, name, path)
        const subject = pathNodes.length === 1 ? this._node : getNode(this, pathNodes.slice(0, pathNodes.length - 1))

        const lastPredicate = pathNodes[pathNodes.length - 1]
        subject.deleteOut(lastPredicate)

        if (value === null || typeof value === 'undefined') {
          return
        }

        if (!assertSetValue(value)) {
          const pathStr = pathNodes.map(p => `<${p}>`).join('/')
          throw new Error(`Unexpected value for path ${pathStr}. Expecting a ${valueTypeName} or RDF/JS term`)
        }

        if (typeof value === 'object' && 'termType' in value) {
          subject.addOut(lastPredicate, value)
          return
        }

        subject.addOut(lastPredicate, toTerm(value))
      },
    })

    if (typeof initial !== 'undefined') {
      if (!Object.hasOwnProperty.call(protoOrDescriptor.constructor, '__defaults')) {
        protoOrDescriptor.constructor.__defaults = new Map()
      }

      protoOrDescriptor.constructor.__defaults.set(name.toString(), initial)
    }
  }
}

interface TermOptions<R extends RdfResource> {
  initial?: ObjectOrFactory<R, Term>
}

export function property<R extends RdfResource>(options: AccessorOptions & TermOptions<R> = {}) {
  return propertyDecorator({
    ...options,
    fromTerm: (obj) => obj.term,
    toTerm: value => value,
    valueTypeName: 'RDF/JS term object',
    assertSetValue: () => true,
  })
}

interface LiteralOptions<R extends RdfResource> {
  type?: typeof Boolean | typeof String | typeof Number
  initial?: ObjectOrFactory<R, string | boolean | number | bigint | Literal>
}

const trueLiteral: Literal = rdf.literal('true', xsd.boolean)

property.literal = function<R extends RdfResource> (options: AccessorOptions & LiteralOptions<R> = {}) {
  const type = options.type || String

  return propertyDecorator<unknown, Literal>({
    ...options,
    fromTerm(obj) {
      if (type === Boolean) {
        return trueLiteral.equals(obj.term)
      }

      if (type === Number) {
        return Number.parseFloat(obj.value)
      }

      return obj.value
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

interface ResourceOptions<R extends RdfResource> {
  as?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]
  initial?: ObjectOrFactory<R, BlankNode | NamedNode | RdfResource>
}

property.resource = function <R extends RdfResource> (options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<RdfResource, BlankNode | NamedNode>({
    ...options,
    fromTerm(this: RdfResource, obj) {
      const constructor: Constructor & Function = this.constructor as Constructor
      if ('factory' in constructor) {
        return constructor.factory.createEntity(obj, options.as)
      }

      throw new Error(`The class ${constructor.name} does not implement a static 'factory' property`)
    },
    toTerm(value: RdfResource) {
      return value._node.term
    },
    valueTypeName: 'RdfResource instance',
    assertSetValue: (value) => {
      if ('termType' in value) {
        return value.termType === 'NamedNode' || value.termType === 'BlankNode'
      }

      return true
    },
  })
}
