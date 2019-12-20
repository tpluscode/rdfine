import { NamedNode } from 'rdf-js'
import { namedNode } from 'rdf-data-model'
import RdfResourceImpl from './RdfResource'

export type PropRef = string | NamedNode

function getPredicate(resource: RdfResourceImpl, name: PropertyKey): NamedNode {
  return (resource.constructor as any).__ns[name.toString()]
}

function predicate(termOrString: PropRef): NamedNode {
  if (typeof termOrString === 'string') {
    return namedNode(termOrString)
  } else {
    return termOrString
  }
}

export function getPath(protoOrDescriptor: any, name: PropertyKey, path?: PropRef | PropRef[]) {
  return (path ? Array.isArray(path) ? path : [path] : [getPredicate(protoOrDescriptor, name)])
    .map(termOrString => predicate(termOrString))
}
