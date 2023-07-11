import type { NamedNode } from '@rdfjs/types'
import cf, { GraphPointer } from 'clownface'
import type { NamespaceBuilder } from '@rdfjs/namespace'
import {RdfineEnvironment} from '../environment';

export interface EdgeTraversal {
  (subject: GraphPointer): GraphPointer[]
  predicate: NamedNode
  crossesGraphBoundaries: boolean
}

export type PropRef = string | NamedNode
export type EdgeTraversalFactory = (this: RdfineEnvironment, ns: NamespaceBuilder) => EdgeTraversal

function namespacedPredicate(term: string, namespace?: NamespaceBuilder): NamedNode {
  if (!namespace) {
    throw new Error(`Cannot construct URI for property ${term}. Annotate the class with @namespace or use a NamedNode`)
  }

  return namespace[term]
}

function predicate(termOrString: PropRef, env: RdfineEnvironment, namespace?: NamespaceBuilder): NamedNode {
  if (typeof termOrString === 'string') {
    if (termOrString.match(/^(http|urn):\/\//)) {
      return env.namedNode(termOrString)
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
    const graphNodes = new Map<string, GraphPointer>()

    subject.out(prop).forEach(node => {
      const quadsWithSubject = subject.dataset.match(node.term)
      const quadsWithObject = subject.dataset.match(null, null, node.term)
      const allQuads = [...quadsWithSubject, ...quadsWithObject]

      allQuads.forEach((quad) => {
        if (!graphNodes.has(quad.graph.value)) {
          // TODO: when clownface gets graph feature
          // graphNodes.set(quad.graph.value, subject.from(quad.graph))
          graphNodes.set(quad.graph.value, cf({
            dataset: subject.dataset,
            term: quad.subject,
            graph: quad.graph,
          }))
        }
      })
    })

    return [...graphNodes.values()]
  }

  edge.predicate = prop
  edge.crossesGraphBoundaries = true

  return edge
}

export function crossBoundaries(this: RdfineEnvironment,prop: PropRef): EdgeTraversalFactory {
  return ns => anyGraph(predicate(prop, this, ns))
}

export function toEdgeTraversals({ constructor }: any, path: (PropRef | EdgeTraversalFactory)[]): EdgeTraversal[] {
  const namespace = constructor.__ns

  return path.map(prop => {
    if (typeof prop === 'function') {
      return prop.call(constructor.env, namespace)
    }

    return sameGraph(predicate(prop, constructor.env, namespace))
  })
}
