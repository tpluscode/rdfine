import { Literal, Term } from 'rdf-js'
import type { GraphPointer } from 'clownface'
import type { RdfResource } from '../RdfResource'
import * as rdfList from './rdf-list'
import type { ResourceIndexer } from './ResourceFactory'

function nodeToValue(target: RdfResource) {
  const fromTerm = (obj: GraphPointer): any => {
    switch (obj.term.termType) {
      case 'BlankNode':
      case 'NamedNode':
        if (rdfList.isList(obj)) {
          return rdfList.enumerateList(target, obj, fromTerm)
        }

        return target._create(obj, [], { parent: target })
      default:
        return obj.term
    }
  }

  return fromTerm
}

export function createProxy<T extends RdfResource<any>>(resource: T): T & ResourceIndexer {
  return new Proxy(resource, {
    get(target, property) {
      if (property in target || typeof property === 'symbol') {
        return (target as any)[property.toString()]
      }

      const objects = target._getObjects(property.toString())

      if (objects.values.length === 0) {
        return undefined
      }

      const results = objects.map(nodeToValue(target))

      return results.length === 1 ? results[0] : results
    },

    set(target: T, property: string | number | symbol, value: T | Literal | Array<T | Literal | null> | null): boolean {
      if (property in target || typeof property === 'symbol') {
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

      const predicate = target.pointer.namedNode(property.toString())
      target.pointer.deleteOut(predicate)

      if (values.length) {
        target.pointer.addOut(predicate, valueNodes)
      }

      return true
    },
  }) as any
}
