import { NamedNode } from 'rdf-js'
import { namedNode } from 'rdf-data-model'

export type PropRef = string | NamedNode

function namespacedPredicate(term: string, namespace?: Record<string, NamedNode>): NamedNode {
  if (!namespace) {
    throw new Error(`Cannot construct URI for property ${term}. Annotate the class with @namespace or use a NamedNode`)
  }

  return namespace[term]
}

function predicate(termOrString: PropRef, namespace?: Record<string, NamedNode>): NamedNode {
  if (typeof termOrString === 'string') {
    if (termOrString.match(/^(http|urn):\/\//)) {
      return namedNode(termOrString)
    }

    return namespacedPredicate(termOrString, namespace)
  } else {
    return termOrString
  }
}

export function getPath({ constructor }: any, name: PropertyKey, path?: PropRef | PropRef[]): NamedNode[] {
  const namespace = constructor.__ns

  if (!path) {
    return [namespacedPredicate(name.toString(), namespace)]
  }

  if (!Array.isArray(path)) {
    return [predicate(path, namespace)]
  }

  return path.map(termOrString => predicate(termOrString, namespace))
}
