import { Literal, Term } from 'rdf-js'
import { SingleContextClownface } from 'clownface'
import { RdfResource } from './RdfResource'
import * as rdfList from './rdf-list'
import { ResourceIndexer } from './ResourceFactory'

function nodeToValue(target: RdfResource) {
  const fromTerm = (obj: SingleContextClownface): any => {
    switch (obj.term.termType) {
      case 'BlankNode':
      case 'NamedNode':
        if (rdfList.isList(obj)) {
          return rdfList.enumerateList(target, obj, fromTerm)
        }

        return target._create(obj)
      default:
        return obj.term
    }
  }

  return fromTerm
}

export function createProxy<T extends RdfResource>(resource: T): T & ResourceIndexer {
  return new Proxy(resource, {
    get(target, property) {
      if (property in target) {
        return (target as any)[property.toString()]
      }

      const objects = target._selfGraph.out(target._selfGraph.namedNode(property.toString()))

      if (objects.values.length === 0) {
        return undefined
      }

      const results = objects.map(nodeToValue(target))

      return results.length === 1 ? results[0] : results
    },

    set(target: T, property: string | number | symbol, value: T | Literal | Array<T | Literal | null> | null): boolean {
      if (property in target) {
        (target as any)[property.toString()] = value
        return true
      }

      if (typeof property === 'number') {
        return false
      }

      const values = Array.isArray(value) ? value : [value]
      const valueNodes = values
        .reduce((values, value) => {
          if (!value || typeof value !== 'object') {
            return values
          }

          if (value && 'termType' in value) {
            return [...values, value]
          }

          return [...values, value.id]
        }, [] as Term[])

      const predicate = target._selfGraph.namedNode(property.toString())
      target._selfGraph.deleteOut(predicate)

      if (values.length) {
        target._selfGraph.addOut(predicate, valueNodes)
      }

      return true
    },
  }) as any
}
