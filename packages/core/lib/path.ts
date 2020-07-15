import { NamedNode } from 'rdf-js'
import RDF from '@rdfjs/data-model'
import type { SingleContextClownface } from 'clownface'
import { NamespaceBuilder } from '@rdfjs/namespace'

export type PropRef = string | NamedNode
export type EdgeTraversalFactory = (ns: NamespaceBuilder) => EdgeTraversal

export interface EdgeTraversal {
  (subject: SingleContextClownface): SingleContextClownface[]
  predicate: NamedNode
  crossesGraphBoundaries: boolean
}

function namespacedPredicate(term: string, namespace?: NamespaceBuilder): NamedNode {
  if (!namespace) {
    throw new Error(`Cannot construct URI for property ${term}. Annotate the class with @namespace or use a NamedNode`)
  }

  return namespace[term]
}

function predicate(termOrString: PropRef, namespace?: NamespaceBuilder): NamedNode {
  if (typeof termOrString === 'string') {
    if (termOrString.match(/^(http|urn):\/\//)) {
      return RDF.namedNode(termOrString)
    }

    return namespacedPredicate(termOrString, namespace)
  } else {
    return termOrString
  }
}

function sameGraph(prop: NamedNode): EdgeTraversal {
  const edge: EdgeTraversal = (subject) => subject.out(prop).toArray()

  edge.predicate = prop
  edge.crossesGraphBoundaries = false

  return edge
}

function anyGraph(prop: NamedNode): EdgeTraversal {
  const edge: EdgeTraversal = subject => {
    const graphNodes = new Map<string, SingleContextClownface>()

    subject.out(prop).forEach(node => {
      const quadsWithSubject = subject.dataset.match(node.term)
      const quadsWithObject = subject.dataset.match(null, null, node.term)
      const allQuads = [...quadsWithSubject, ...quadsWithObject]

      allQuads.forEach((quad) => {
        if (!graphNodes.has(quad.graph.value)) {
          graphNodes.set(quad.graph.value, subject.from(quad.graph))
        }
      })
    })

    return [...graphNodes.values()]
  }

  edge.predicate = prop
  edge.crossesGraphBoundaries = true

  return edge
}

export function crossBoundaries(prop: PropRef): EdgeTraversalFactory {
  return ns => anyGraph(predicate(prop, ns))
}

export function toEdgeTraversals({ constructor }: any, path: (PropRef | EdgeTraversalFactory)[]): EdgeTraversal[] {
  const namespace = constructor.__ns

  return path.map(prop => {
    if (typeof prop === 'function') {
      return prop(namespace)
    }

    return sameGraph(predicate(prop, namespace))
  })
}
