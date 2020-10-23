import { AnyPointer, GraphPointer } from 'clownface'
import { BlankNode, NamedNode } from 'rdf-js'
import type { ResourceIdentifier } from '../RdfResource'

export function getPointer(graph: AnyPointer, id?: ResourceIdentifier | string): GraphPointer<BlankNode | NamedNode> {
  if (id && typeof id !== 'string') {
    return graph.node(id)
  }

  if (!id || id.startsWith('_:')) {
    return graph.blankNode()
  }

  return graph.namedNode(id)
}
