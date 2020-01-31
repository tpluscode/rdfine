import { DatasetCore, NamedNode, Term } from 'rdf-js'
import RdfResourceImpl, { RdfResource } from '../RdfResource'
import { getPath, PropRef } from '../path'
import cf, { SafeClownface, SingleContextClownface } from 'clownface'
import { isList, enumerateList } from '../rdf-list'
import { ClassElement } from './index'
import literalPropertyDecorator from './property/literal'
import resourcePropertyDecorator from './property/resource'
import { rdf } from '../vocabs'

export interface AccessorOptions {
  values?: 'array' | 'list'
  path?: PropRef | PropRef[]
  strict?: true
  namedGraphs?: Partial<NamedGraphsOptions>
}

interface NamedGraphsOptions {
  combineSubjects: boolean
  crossBoundaries: boolean
}

function getNode(node: SingleContextClownface, path: NamedNode[]): SafeClownface {
  return path
    .reduce<SafeClownface>((node, prop) => {
    return node.out(prop)
  }, node)
}

function onlyUnique <T>(areEqual: (left: T, right: T) => boolean) {
  return function (value: T | T[], index: number, self: Array<T | T[]>): boolean {
    if (Array.isArray(value)) {
      return true
    }

    const found = self.findIndex(other => {
      if (Array.isArray(other)) {
        return true
      }

      return areEqual(value, other)
    })

    return found === index
  }
}

type ArrayOrSingle<T> = T | T[]
export type ObjectOrFactory<TSelf, T, TTerm extends Term> =
  ArrayOrSingle<T | TTerm | SingleContextClownface<DatasetCore, TTerm>> |
  ((self: TSelf) => ArrayOrSingle<T | TTerm | SingleContextClownface<DatasetCore, TTerm>>)

interface PropertyDecoratorOptions<T extends RdfResource, TValue, TTerm extends Term> extends AccessorOptions {
  fromTerm: (this: T, obj: SingleContextClownface) => TValue
  toTerm: (value: TValue) => TTerm
  assertSetValue: (value: RdfResource | Term | SingleContextClownface | TValue) => boolean
  valueTypeName: string
  initial?: ObjectOrFactory<T, TValue, TTerm>
  compare: (left: TValue, right: TValue) => boolean
}

function createProperty<T extends RdfResource, TValue, TTerm extends Term>(proto: any, name: string, options: PropertyDecoratorOptions<T, TValue, TTerm>) {
  const { path, fromTerm, toTerm, assertSetValue, valueTypeName, initial, strict, compare } = options
  const { combineSubjects = false, crossBoundaries = false } = options.namedGraphs || {}
  const values = options.values || (crossBoundaries || combineSubjects ? 'array' : 'single')

  if (values === 'list' && crossBoundaries) {
    throw new Error('RDF Lists are not supported with property operating across multiple named graphs')
  }

  Object.defineProperty(proto, name, {
    get(this: T & RdfResourceImpl): unknown {
      const rootNode = combineSubjects ? this._unionGraph : this._selfGraph
      const pathNodes = getPath(proto, name, path)
      const nodes = getNode(rootNode, pathNodes)

      const objectNodes = nodes.toArray().reduce((current, node) => {
        if (crossBoundaries) {
          const quadsWithSubject = rootNode.dataset.match(node.term)
          const quadsWithObject = rootNode.dataset.match(null, null, node.term)
          const allQuads = [...quadsWithSubject, ...quadsWithObject]

          const allNodes = allQuads.reduce((graphNodes, quad) => {
            if (!graphNodes.has(quad.graph.value)) {
              graphNodes.set(quad.graph.value, cf({
                dataset: this._unionGraph.dataset,
                term: quad.subject,
                graph: quad.graph,
              }))
            }

            return graphNodes
          }, new Map<string, SingleContextClownface>())
          return [...current, ...allNodes.values()]
        }

        return [...current, node]
      }, [] as SingleContextClownface[])

      const returnValues = objectNodes.map((obj, index) => {
        if (isList(obj)) {
          if (index > 0) {
            throw new Error('Lists of lists are not supported')
          }

          return enumerateList(this, obj, fromTerm.bind(this))
        }

        return fromTerm.call(this, obj)
      }).filter(onlyUnique(compare))

      if (values === 'array') {
        return returnValues
      }

      if (values === 'list') {
        return returnValues[0] || []
      }

      if (returnValues.length > 1) {
        throw new Error(`${name}: Multiple terms found where 0..1 was expected`)
      }

      if (Array.isArray(returnValues[0])) {
        throw new Error(`${name}: RDF List found where 0..1 object was expected`)
      }

      if (this.__initialized && strict && returnValues.length === 0) {
        throw new Error(`Object not found for property ${name}`)
      }

      return returnValues[0]
    },

    set(this: RdfResourceImpl, value: ArrayOrSingle<RdfResource | Term | SingleContextClownface>) {
      if (values === 'single' && Array.isArray(value)) {
        throw new Error(`${name}: Cannot set array to a non-array property`)
      }

      const pathNodes = getPath(proto, name, path)
      const subject = pathNodes.length === 1
        ? this._selfGraph
        : getNode(this._selfGraph, pathNodes.slice(0, pathNodes.length - 1))

      const lastPredicate = pathNodes[pathNodes.length - 1]

      subject.out(lastPredicate).forEach(obj => {
        if (isList(obj)) {
          subject.deleteList(lastPredicate)
        }
      })

      subject.deleteOut(lastPredicate)

      if (value === null || typeof value === 'undefined') {
        return
      }

      let valueArray: Array<RdfResource | Term | SingleContextClownface | TValue>
      if (Array.isArray(value)) {
        valueArray = value
      } else {
        valueArray = [value]
      }

      const termsArray = valueArray.map(value => {
        if (!assertSetValue(value)) {
          const pathStr = pathNodes.map(p => `<${p}>`).join('/')
          throw new Error(`Unexpected value for path ${pathStr}. Expecting a ${valueTypeName} or RDF/JS term`)
        }

        if (typeof value === 'object' && 'termType' in value) {
          return value
        }

        if (typeof value === 'object' && 'term' in value) {
          return value.term
        }

        if (typeof value === 'object' && 'id' in value) {
          return value.id
        }

        return toTerm(value)
      })

      if (values === 'list') {
        if (termsArray.length === 0) {
          subject.addOut(lastPredicate, rdf.nil)
        } else {
          subject.addList(lastPredicate, termsArray)
        }
      } else {
        subject.addOut(lastPredicate, termsArray)
      }
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
  <T extends RdfResource, TValue, TInitial, TTerm extends Term>(options: PropertyDecoratorOptions<T, TValue, TTerm>, proto: Record<string, unknown>, name: PropertyKey) => {
    createProperty(proto, name.toString(), options)
  }

const standardProperty =
  <T extends RdfResource, TValue, TInitial, TTerm extends Term>(options: PropertyDecoratorOptions<T, TValue, TTerm>, element: ClassElement) => {
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

export function propertyDecorator<T extends RdfResource, TValue, TTerm extends Term>(options: PropertyDecoratorOptions<T, TValue, TTerm>) {
  return (protoOrDescriptor: RdfResource|ClassElement, name?: PropertyKey): any =>
    (name !== undefined)
      ? legacyProperty(options, protoOrDescriptor as any, name)
      : standardProperty(options, protoOrDescriptor as ClassElement)
}

interface TermOptions <TSelf>{
  initial?: ObjectOrFactory<TSelf, Term, Term>
}

export function property<R extends RdfResource>(options: AccessorOptions & TermOptions<R> = {}) {
  return propertyDecorator<R, Term, Term>({
    ...options,
    namedGraphs: {
      crossBoundaries: false,
      combineSubjects: options.namedGraphs?.combineSubjects,
    },
    values: options.namedGraphs?.crossBoundaries ? 'array' : options.values,
    fromTerm: (obj) => obj.term,
    toTerm: value => value,
    valueTypeName: 'RDF/JS term object',
    assertSetValue: () => true,
    compare: (left, right) => left && left.equals(right),
  })
}

property.literal = literalPropertyDecorator

property.resource = resourcePropertyDecorator
