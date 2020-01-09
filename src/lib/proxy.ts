import { RdfResource } from './RdfResource'
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

      return objects
        .map(obj => {
          switch (obj.term.termType) {
            case 'BlankNode':
            case 'NamedNode':
              return fromResource(target, obj)
            default:
              return obj.term
          }
        })
    },
  })
}