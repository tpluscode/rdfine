import TermMap from '@rdf-esm/term-map'
import type { BlankNode, DatasetCore, Literal, NamedNode, Term } from 'rdf-js'
import { namedNode } from '@rdf-esm/data-model'
import type { Constructor } from './ResourceFactory'
import type { RdfResource } from '../RdfResource'

interface Context {
  id: '@id'
  type: '@type'
}

interface LiteralObject {
  '@value': string
  '@type': string
}

type JsonifiedResource<T extends RdfResource<any> | unknown> = Omit<{
  [P in keyof Required<T>]?: T[P] extends string ? T[P]
    : T[P] extends RdfResource<any>
      ? JsonifiedResource<T[P]>
      : T[P] extends (NamedNode | BlankNode)
        ? JsonifiedResource<RdfResource<any>>
        : T[P] extends Literal
          ? LiteralObject
          : Extract<T[P], Array<any>> extends (infer U)[]
            ? U extends RdfResource<any>
              ? JsonifiedResource<U> : unknown : unknown
}, keyof RdfResource | '__initialized'> & {
  '@context': Context
  id: string
  type: string[]
}

export type Jsonified<T extends RdfResource<any> | unknown> = JsonifiedResource<T> & Record<string, JsonifiedResource<RdfResource> & LiteralObject>

function getObjectMap<D extends DatasetCore>(resource: RdfResource<D>) {
  return [...resource.pointer.dataset.match(resource.id)].reduce((map, quad) => {
    const quads = map.get(quad.predicate) || []
    quads.push(quad.object)
    map.set(quad.predicate, quads)
    return map
  }, new TermMap<Term, Term[]>())
}

export function toJSON<D extends DatasetCore>(resource: RdfResource<D>) {
  const id = resource.id.termType === 'NamedNode' ? resource.id.value : `_:${resource.id.value}`
  const remainingQuads = getObjectMap(resource)
  const context: Record<string, string> = {
    id: '@id',
    type: '@type',
  }

  const json: Record<string, any> = {
    '@context': context,
    id,
  }

  const types = [...resource.types]
  if (types.length > 0) {
    json.type = types.map(type => type.id.value)
  }
  const { __properties: properties } = (resource.constructor as Constructor)

  ;[...properties].forEach(([name, { options }]) => {
    if (!options.path || Array.isArray(options.path) || typeof options.path === 'function') {
      return
    }

    const predicate = typeof options.path === 'string' ? namedNode(options.path) : options.path

    context[name] = predicate.value
    json[name] = resource.getString(options.path)
    remainingQuads.delete(predicate)
  })

  ;[...remainingQuads].forEach(([predicate, quads]) => {
    const [first] = quads
    switch (first.termType) {
      case 'Literal':
        json[predicate.value] = first.value
        break
    }
  })

  return json
}
