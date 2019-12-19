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

      set(this: RdfResource, value: RdfResource | null) {
        const path = getPath(protoOrDescriptor, this._node, name, options.path)
        const node = path.length === 1 ? this._node : getNode(this._node, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        node.deleteOut(lastPredicate)

        if (value === null) {
          return
        }

        if (typeof value === 'object' && '_node' in value) {
          node.addOut(lastPredicate, value._node)
          return
        }

        const pathStr = path.map(p => `<${p}>`).join('/')
        throw new Error('Unexpected value for path ' + pathStr + '. Expecting a resource object')
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
  const type = options.type || String

  return (protoOrDescriptor: any, name: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get(this: RdfResource): any {
        const node = getNode(this._node, getPath(protoOrDescriptor, this._node, name, options.path))

        const values = node.map(objNode => {
          if (type === Boolean) {
            return trueLiteral.equals(objNode.term as any) // TODO: fix equals typing
          }

          return objNode.value
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
        const subject = path.length === 1 ? this._node : getNode(this._node, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        subject.deleteOut(lastPredicate)

        if (value === null) {
          return
        }

        if (typeof value === 'object') {
          const pathStr = path.map(p => `<${p}>`).join('/')
          throw new Error(`Unexpected value for path ${pathStr}. Expecting a ${type.name}`)
        }

        let datatype: NamedNode | undefined
        if (type === Boolean) {
          datatype = trueLiteral.datatype
        }

        subject.addOut(lastPredicate, subject.literal(value.toString(), datatype))
      },
    })
  }
}

export function namespace(ns: any) {
  return <T extends RdfResource>(classOrDescriptor: Constructor<T>) => {
    classOrDescriptor.__ns = ns
  }
}
