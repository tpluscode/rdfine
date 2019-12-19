import { Literal, NamedNode, Term } from 'rdf-js'
import Clownface from 'clownface/lib/Clownface'
import rdf from 'rdf-data-model'
import { Mixin } from './ResourceFactory'
import RdfResource from './RdfResource'

const trueLiteral: Literal = rdf.literal('true', rdf.namedNode('http://www.w3.org/2001/XMLSchema#boolean'))

type PropRef = string | NamedNode

interface AccessorOptions {
  path?: PropRef | PropRef[]
  array?: boolean
}

interface ResourceAccessorOptions extends AccessorOptions {
  as?: Mixin<any>[]
}

type Constructor<T = RdfResource> = {
  new (...args: any[]): T
  __ns?: any
};

interface LiteralAccessorOption extends AccessorOptions {
  type?: typeof Boolean
}

function predicate(cf: Clownface, termOrString: PropRef) {
  if (typeof termOrString === 'string') {
    return cf.namedNode(termOrString)
  } else {
    return cf.node(termOrString)
  }
}

function getNode(cf: Clownface, path: Clownface[]) {
  return path
    .reduce((node, prop) => {
      return node.out(prop)
    }, cf)
}

function getPredicate(cf: any, name: PropertyKey): NamedNode {
  return (cf.constructor).__ns[name.toString()]
}

function getPath(protoOrDescriptor: any, cf: Clownface, name: PropertyKey, path?: PropRef | PropRef[]) {
  return (path ? Array.isArray(path) ? path : [path] : [getPredicate(protoOrDescriptor, name)])
    .map(termOrString => predicate(cf, termOrString))
}

export function resource(options: ResourceAccessorOptions = {}) {
  return (protoOrDescriptor: any, name: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get(this: any): any {
        const node = getNode(this._node, getPath(protoOrDescriptor, this._node, name, options.path))

        const values = node.map(term => {
          return this.constructor._factory.createEntity(term, options.as)
        })

        if (options.array === true) {
          return values
        }

        if (values.length > 1) {
          throw new Error('Multiple terms found where 0..1 was expected')
        }

        return values[0]
      },

      set(this: RdfResource, value: any) {
        const path = getPath(protoOrDescriptor, this._node, name, options.path)
        const node = path.length === 1 ? this._node : getNode(this._node, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        node.deleteOut(lastPredicate)
          .addOut(lastPredicate, value)
      },
    })
  }
}

export function term(options: AccessorOptions = {}) {
  return (protoOrDescriptor: any, name: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get(this: any): any {
        const node = getNode(this._node, getPath(protoOrDescriptor, this._node, name, options.path))

        const values = node.terms

        if (options.array === true) {
          return values
        }

        if (values.length > 1) {
          throw new Error('Multiple terms found where 0..1 was expected')
        }

        return values[0]
      },

      set(this: RdfResource, value: Term) {
        const path = getPath(protoOrDescriptor, this._node, name, options.path)
        const node = path.length === 1 ? this._node : getNode(this._node, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        node.deleteOut(lastPredicate)
          .addOut(lastPredicate, value)
      },
    })
  }
}

export function literal(options: LiteralAccessorOption = {}) {
  return (protoOrDescriptor: any, name: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get(this: RdfResource): any {
        const node = getNode(this._node, getPath(protoOrDescriptor, this._node, name, options.path))

        if (options.type === Boolean) {
          return trueLiteral.equals(node.term as any) // TODO: fix equals typing
        }

        return node.value
      },

      set(this: RdfResource, value: any) {
        const path = getPath(protoOrDescriptor, this._node, name, options.path)
        const node = path.length === 1 ? this._node : getNode(this._node, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        node.deleteOut(lastPredicate)
          .addOut(lastPredicate, value)
      },
    })
  }
}

export function namespace(ns: any) {
  return <T extends RdfResource>(classOrDescriptor: Constructor<T>) => {
    classOrDescriptor.__ns = ns
  }
}
