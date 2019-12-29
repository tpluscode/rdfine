import { BlankNode, Literal, NamedNode, Term } from 'rdf-js'
import RdfResource from '../RdfResource'
import { getPath, PropRef } from '../path'
import rdf from 'rdf-data-model'
import { Constructor, Mixin } from '../ResourceFactory'
import { SafeClownface, SingleContextClownface } from 'clownface'

interface AccessorOptions {
  array?: boolean
  path?: PropRef | PropRef[]
}

function getNode(r: RdfResource, path: NamedNode[]): SafeClownface {
  return path
    .reduce<SafeClownface>((node, prop) => {
    return node.out(prop)
  }, r._node)
}

interface PropertyDecoratorOptions<T, N> extends AccessorOptions {
  fromTerm: (this: RdfResource, obj: SingleContextClownface) => unknown
  toTerm: (value: T) => Term
  assertSetValue: (value: T | Term) => boolean
  valueTypeName: string
  initial?: T | N
}

function propertyDecorator<T, N>({ path, array, fromTerm, toTerm, assertSetValue, valueTypeName, initial }: PropertyDecoratorOptions<T, N>) {
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
      protoOrDescriptor.constructor.__defaults.set(name.toString(), initial)
    }
  }
}

interface TermOptions {
  initial?: Term
}

export function property(options: AccessorOptions & TermOptions = {}) {
  return propertyDecorator({
    ...options,
    fromTerm: (obj) => obj.term,
    toTerm: value => value,
    valueTypeName: 'RDF/JS term object',
    assertSetValue: () => true,
  })
}

interface LiteralOptions {
  type?: typeof Boolean | typeof String
  initial?: unknown | Literal
}

const trueLiteral: Literal = rdf.literal('true', rdf.namedNode('http://www.w3.org/2001/XMLSchema#boolean'))

property.literal = function (options: AccessorOptions & LiteralOptions = {}) {
  const type = options.type || String

  return propertyDecorator<unknown, Literal>({
    ...options,
    fromTerm(obj) {
      if (type === Boolean) {
        return trueLiteral.equals(obj.term as any) // TODO: fix equals typing
      }

      return obj.value
    },
    toTerm(value: any) {
      let datatype: NamedNode | undefined
      if (type === Boolean) {
        datatype = trueLiteral.datatype
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

property.resource = function (options: AccessorOptions & ResourceOptions = {}) {
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
