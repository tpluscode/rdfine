import { Literal, NamedNode } from 'rdf-js'
import Clownface from 'clownface/lib/Clownface'
import rdf from 'rdf-data-model'
import { factory, Mixin } from './TypedEntityFactory'

const trueLiteral: Literal = rdf.literal(true)

type PropRef = string | NamedNode

interface AccessorOptions {
  path?: PropRef | PropRef[];
  as?: 'term' | Mixin<any>[];
  array?: boolean;
}

interface LiteralAccessorOption extends AccessorOptions {
  type?: typeof Boolean;
}

function predicate (cf: Clownface, termOrString: PropRef) {
  if (typeof termOrString === 'string') {
    return cf.namedNode(termOrString)
  } else {
    return cf.node(termOrString)
  }
}

function getNode (cf: Clownface, path: Clownface[]) {
  return path
    .reduce((node, prop) => {
      return node.out(prop)
    }, cf)
}

function getPredicate (cf: any, name: PropertyKey): NamedNode {
  return (cf.constructor).__ns[name.toString()]
}

function getPath (protoOrDescriptor: any, cf: Clownface, path: PropRef | PropRef[], name: PropertyKey) {
  return (path ? Array.isArray(path) ? path : [ path ] : [ getPredicate(protoOrDescriptor, name) ])
    .map(termOrString => predicate(cf, termOrString))
}

export function property (options: AccessorOptions = {}) {
  const Type = options.as || 'auto'

  return (protoOrDescriptor: any, name?: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get (this: Clownface): any {
        const node = getNode(this, getPath(protoOrDescriptor, this, options.path, name))

        const values = node.map(term => {
          if (Type === 'term') {
            return term.term
          }

          if (Type === 'auto') {
            return factory.createEntity(term)
          }

          return factory.createEntity(term, Type)
        })

        if (options.array === true) {
          return values
        }

        if (values.length > 1) {
          throw new Error(`Multiple terms found where 0..1 was expected`)
        }

        return values[0]
      },

      set (this: Clownface, value: any) {
        const path = getPath(protoOrDescriptor, this, options.path, name)
        let node: Clownface
        node = path.length === 1 ? this : getNode(this, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        node.deleteOut(lastPredicate)
          .addOut(lastPredicate, value)
      },
    })
  }
}

export function literal (options: LiteralAccessorOption = {}) {
  return (protoOrDescriptor: any, name?: PropertyKey): any => {
    Object.defineProperty(protoOrDescriptor, name, {
      get (this: Clownface): any {
        const node = getNode(this, getPath(protoOrDescriptor, this, options.path, name))

        if (options.type === Boolean) {
          return trueLiteral.equals(node.term)
        }

        return node.value
      },

      set (this: Clownface, value: any) {
        const path = getPath(protoOrDescriptor, this, options.path, name)
        let node: Clownface
        node = path.length === 1 ? this : getNode(this, path.slice(path.length - 1))

        const lastPredicate = path[path.length - 1]
        node.deleteOut(lastPredicate)
          .addOut(lastPredicate, value)
      },
    })
  }
}

export function namespace (ns: any) {
  return (classOrDescriptor: any) => {
    classOrDescriptor.__ns = ns
  }
}
