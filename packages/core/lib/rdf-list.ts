import { AnyPointer, GraphPointer } from 'clownface'
import { rdf } from '@tpluscode/rdf-ns-builders'
import { Term } from 'rdf-js'
import type { DatasetType, RdfResource, ResourceNode } from '../RdfResource'

function isLast(node: AnyPointer): boolean {
  return rdf.nil.equals(node.term)
}

export function isList(node: AnyPointer): boolean {
  const isLastListNode = isLast(node)
  const isListNode = node.out([rdf.first, rdf.rest]).values.length === 2
  return isLastListNode || isListNode
}

export function enumerateList<T, D extends ResourceNode = ResourceNode>(parent: RdfResource<D>, listNode: GraphPointer<Term, DatasetType<D>>, fromTerm: (obj: GraphPointer<Term, DatasetType<D>>) => T | T[]): T[] {
  const items: T[] = []

  let current = listNode
  while (!isLast(current)) {
    const firstItem = current.out(rdf.first).map((first, index) => {
      if (index > 0) {
        throw new Error('Malformed RDF List with multiple rdf:first objects')
      }

      return fromTerm.call(parent, first)
    })

    firstItem.forEach(item => {
      if (Array.isArray(item)) {
        throw new Error('Malformed RDF List had multiple rdf:first objects')
      }

      items.push(item)
    })

    current = current.out(rdf.rest).map((quad, index) => {
      if (index > 0) {
        throw new Error('Malformed RDF List with multiple rdf:rest objects')
      }

      return quad
    })[0]
  }

  return items
}
