import { DatasetCore, Quad, Term } from 'rdf-js'
import TermSet from '@rdfjs/term-set'
import { Context } from 'clownface/lib/Context'
import RdfResourceImpl, { RdfResource } from '../../RdfResource'
import { EdgeTraversal, EdgeTraversalFactory, PropRef, toEdgeTraversals } from '../path'
import cf, { SafeClownface, SingleContextClownface } from 'clownface'
import { isList, enumerateList } from '../rdf-list'
import { ClassElement } from './index'
import literalPropertyDecorator from './property/literal'
import resourcePropertyDecorator from './property/resource'
import { rdf } from '@tpluscode/rdf-ns-builders'
import { onlyUnique } from '../filter'
import * as compare from '../compare'

export interface AccessorOptions {
  values?: 'array' | 'list'
  path?: ArrayOrSingle<PropRef | EdgeTraversalFactory>
  strict?: true
  subjectFromAllGraphs?: true
}

interface NamedGraphsOptions {
  subjectFromAllGraphs: boolean
}

function getObjects(subjects: SingleContextClownface[], path: EdgeTraversal[]): SafeClownface {
  const nodes = path.reduce((subjects, edge) => {
    const objects: SingleContextClownface[] = []

    subjects.forEach(subject => {
      objects.push(...edge(subject))
    })

    return objects
  }, subjects)

  const context = nodes.reduce((contexts, node) => {
    return contexts.concat(node._context)
  }, [] as Context<DatasetCore, Term>[])

  return cf({
    dataset: subjects[0].dataset,
    _context: context,
  }) as any as SafeClownface
}

function getNodeFromEveryGraph(node: SingleContextClownface): SingleContextClownface[] {
  const graphs = node.datasets.reduce<Set<Quad['graph']>>((set, dataset) => {
    return [...dataset].reduce((set, quad) => {
      return set.add(quad.graph)
    }, set)
  }, new TermSet())

  const graphNodes = [...graphs.values()]
  if (!graphNodes.length) {
    return [node]
  }

  return graphNodes.map(graph => cf({
    dataset: node.dataset,
    term: node.term,
    graph,
  }))
}

type ArrayOrSingle<T> = T | T[]
export type ObjectOrFactory<TSelf, T, TTerm extends Term> =
  ArrayOrSingle<T | TTerm | SingleContextClownface<TTerm>> |
  ((self: TSelf) => ArrayOrSingle<T | TTerm | SingleContextClownface<TTerm>>)

interface PropertyDecoratorOptions<T extends RdfResource, TValue, TTerm extends Term> extends AccessorOptions {
  fromTerm: (this: T, obj: SingleContextClownface) => TValue
  toTerm: (this: T, value: TValue) => TTerm
  assertSetValue: (value: RdfResource | Term | SingleContextClownface | TValue) => boolean
  valueTypeName: string
  initial?: ObjectOrFactory<T, TValue, TTerm>
  compare: (left: TValue, right: TValue) => boolean
}

function createProperty<T extends RdfResource, TValue, TTerm extends Term>(proto: any, name: string, options: PropertyDecoratorOptions<T, TValue, TTerm>) {
  const { fromTerm, toTerm, assertSetValue, valueTypeName, initial, strict, compare, subjectFromAllGraphs } = options
  let values = options.values || 'single'

  const getPath = () => Array.isArray(options.path)
    ? toEdgeTraversals(proto, options.path)
    : toEdgeTraversals(proto, [options.path || name])

  Object.defineProperty(proto, name, {
    get(this: T & RdfResourceImpl): unknown {
      const rootNode = subjectFromAllGraphs ? getNodeFromEveryGraph(this._selfGraph) : [this._selfGraph]
      const path = getPath()
      const nodes = getObjects(rootNode, path)
      const crossesBoundaries = path.some(edge => edge.crossesGraphBoundaries)
      if (subjectFromAllGraphs || crossesBoundaries) {
        values = 'array' as const
      }

      const returnValues = nodes.map((obj, index) => {
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

    set(this: T & RdfResourceImpl, value: ArrayOrSingle<RdfResource | Term | SingleContextClownface>) {
      if (values === 'single' && Array.isArray(value)) {
        throw new Error(`${name}: Cannot set array to a non-array property`)
      }

      const path = getPath()
      const subject = path.length === 1
        ? this._selfGraph
        : getObjects([this._selfGraph], path.slice(0, path.length - 1))

      const lastPredicate = path[path.length - 1].predicate

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
          const pathStr = path.map(edge => `<${edge.predicate.value}>`).join('/')
          throw new Error(`Unexpected value for path ${pathStr}. Expecting a ${valueTypeName} or RDF/JS term.`)
        }

        if (typeof value === 'object' && 'termType' in value) {
          return value
        }

        if (typeof value === 'object' && 'term' in value) {
          return value.term
        }

        if (typeof value === 'object' && '_selfGraph' in value) {
          return value.id
        }

        return toTerm.call(this, value)
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
    fromTerm: (obj) => obj.term,
    toTerm: value => value,
    valueTypeName: 'RDF/JS term object',
    assertSetValue: () => true,
    compare: compare.terms,
  })
}

property.literal = literalPropertyDecorator

property.resource = resourcePropertyDecorator
