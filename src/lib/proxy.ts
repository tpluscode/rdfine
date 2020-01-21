import { SingleContextClownface } from 'clownface'
import { DatasetCore, Literal, Term } from 'rdf-js'
import { RdfResource, ResourceIdentifier } from './RdfResource'
import { fromResource } from './conversion'

export function createProxy<T extends RdfResource>(resource: T): T & Record<string, any> {
  return new Proxy(resource, {
    get(target, property) {
      if (property in target) {
        return (target as any)[property.toString()]
      }

      const objects = target._node.out(target._node.namedNode(property.toString()))

      if (objects.values.length === 0) {
        return undefined
      }

      const results = objects
        .map(obj => {
          switch (obj.term.termType) {
            case 'BlankNode':
            case 'NamedNode':
              return fromResource(target, obj as SingleContextClownface<DatasetCore, ResourceIdentifier>)
            default:
              return obj.term
          }
        })

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

      const predicate = target._node.namedNode(property.toString())
      target._node.deleteOut(predicate)

      if (values.length) {
        target._node.addOut(predicate, valueNodes)
      }

      return true
    },
  })
}
