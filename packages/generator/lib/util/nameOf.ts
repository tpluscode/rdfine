import { shrink } from '@zazuko/rdf-vocabularies'
import { SingleContextClownface } from 'clownface'

export function nameOf(term: SingleContextClownface): string {
  const shrunk = shrink(term.value)

  return shrunk.split(':')[1]
}

/*
export default {
  mixin(term: SingleContextClownface) {
    return `${nameOf(term)}Mixin`
  },

  term(term: SingleContextClownface) {
    return nameOf(term)
  },

  'class'(term: SingleContextClownface) {
    return `${nameOf(term)}Class`
  },
}
*/
