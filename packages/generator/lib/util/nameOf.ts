import { shrink } from '@zazuko/rdf-vocabularies'
import { GraphPointer } from 'clownface'

export function nameOf(term: GraphPointer): string {
  const shrunk = shrink(term.value)

  return shrunk.split(':')[1]
}

/*
export default {
  mixin(term: GraphPointer) {
    return `${nameOf(term)}Mixin`
  },

  term(term: GraphPointer) {
    return nameOf(term)
  },

  'class'(term: GraphPointer) {
    return `${nameOf(term)}Class`
  },
}
*/
