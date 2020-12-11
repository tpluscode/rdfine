import { shrink } from '@zazuko/rdf-vocabularies'
import { GraphPointer } from 'clownface'

const rdfineBaseNames = ['equals', 'types', 'pointer', 'unionGraphPointer', '_graphId', '_parent', 'isAnonymous', 'hasType', 'get', 'getArray', 'getBoolean', 'getString', 'getNumber', 'toJSON', '_getObjects', '_create']

export function nameOf(term: GraphPointer): string {
  const shrunk = shrink(term.value)

  const name = shrunk.split(':')[1]
  if (rdfineBaseNames.includes(name)) {
    return `_${name}`
  }
  return name
}
