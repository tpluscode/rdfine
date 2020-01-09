import { BlankNode, Literal, NamedNode, Term } from 'rdf-js'
import { RdfResource } from '../RdfResource'
import { getPath, PropRef } from '../path'
import rdf from 'rdf-data-model'
import { Constructor, Mixin } from '../ResourceFactory'
import { SafeClownface, SingleContextClownface } from 'clownface'
import { xsd } from '../vocabs'
import { isList, enumerateList } from '../rdf-list'
import { ClassElement } from './index'
import { fromLiteral, fromResource } from '../conversion'

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

function createProperty<T, N>(proto: any, name: string, options: PropertyDecoratorOptions<T, N>) {
  const { path, array, fromTerm, toTerm, assertSetValue, valueTypeName, initial, strict } = options
  Object.defineProperty(proto, name, {
    get(this: any): any {
      const pathNodes = getPath(proto, name, path)
      const node = getNode(this, pathNodes)

      const values = node.map((quad, index) => {
        if (isList(quad)) {
          if (index > 0) {
            throw new Error('Lists of lists are not supported')
          }

          return enumerateList(this, quad, fromTerm.bind(this))
        }

        return fromTerm.call(this, quad)
      })

      if (array === true) {
        if (values.length === 1 && Array.isArray(values[0])) {
          return [...values[0]]
        }

        return values
      }

      if (values.length > 1) {
        throw new Error('Multiple terms found where 0..1 was expected')
      }

      if (Array.isArray(values[0])) {
        throw new Error('RDF List found where 0..1 object was expected')
      }

      if (this.__initialized && strict && values.length === 0) {
        throw new Error(`Object not found for property ${name}`)
      }

      return values[0]
    },

    set(this: RdfResource, value: T | Term) {
      if (!array && Array.isArray(value)) {
        throw new Error('Cannot set array to a non-array property')
      }

      const pathNodes = getPath(proto, name, path)
      const subject = pathNodes.length === 1 ? this._node : getNode(this, pathNodes.slice(0, pathNodes.length - 1))

      const lastPredicate = pathNodes[pathNodes.length - 1]

      subject.out(lastPredicate).forEach(obj => {
        if (isList(obj)) {
          throw new Error('Setting RDF Lists is not supported')
        }
      })

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
    if (!Object.hasOwnProperty.call(proto.constructor, '__defaults')) {
      proto.constructor.__defaults = new Map()
    }

    proto.constructor.__defaults.set(name, initial)
  }
}

const legacyProperty =
  <T, N>(options: PropertyDecoratorOptions<T, N>, proto: Record<string, unknown>, name: PropertyKey) => {
    createProperty(proto, name.toString(), options)
  }

const standardProperty =
  <T, N>(options: PropertyDecoratorOptions<T, N>, element: ClassElement) => {
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer(this: { [key: string]: unknown }) {
        if (typeof element.initializer === 'function') {
          this[element.key as string] = element.initializer.call(this)
        }
      },
      finisher(clazz: any) {
        createProperty(clazz.prototype, element.key.toString(), options)
      },
    }
  }

function propertyDecorator<T, N>(options: PropertyDecoratorOptions<T, N>) {
  return (protoOrDescriptor: RdfResource|ClassElement, name?: PropertyKey): any =>
    (name !== undefined)
      ? legacyProperty(options, protoOrDescriptor as any, name)
      : standardProperty(options, protoOrDescriptor as ClassElement)
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

interface ResourceOptions<R extends RdfResource> {
  as?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]
  initial?: ObjectOrFactory<R, BlankNode | NamedNode | RdfResource>
}

property.resource = function <R extends RdfResource> (options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<RdfResource, BlankNode | NamedNode>({
    ...options,
    fromTerm(this: RdfResource, obj) {
      return fromResource(this, obj, options.as)
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
