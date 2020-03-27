import { Clownface, SingleContextClownface } from 'clownface'
import { Context } from '../index'
import { owl, rdfs, schema } from '@tpluscode/rdf-ns-builders'

function findDirectRanges(prop: SingleContextClownface): SingleContextClownface[] {
  return prop.out([schema.rangeIncludes, rdfs.range])
    .filter(node => node.term.termType === 'NamedNode')
    .toArray()
}

function findUnionedRanges(prop: SingleContextClownface): SingleContextClownface[] {
  const lists = prop.out(rdfs.range)
    .out([owl.unionOf, owl.disjointUnionOf])

  return [...lists.list()]
}

function flatUnique(...terms: SingleContextClownface[][]): SingleContextClownface[] {
  return [...terms.reduce((set, terms) => {
    return terms.reduce((set, term) => {
      set.add(term)
      return set
    }, set)
  }, new Set<SingleContextClownface>())]
}

function findDirectDomain(clas: SingleContextClownface, vocabulary: Clownface): SingleContextClownface[] {
  return vocabulary.has([schema.domainIncludes, rdfs.domain], clas).toArray()
}

function findUnionedDomains(clas: SingleContextClownface, vocabulary: Clownface): SingleContextClownface[] {
  return vocabulary.has(rdfs.domain)
    .map(prop => {
      const classes = prop.out(rdfs.domain).out([owl.unionOf, owl.disjointUnionOf])
        .map(union => [...union.list()].map(c => c.value))
        .reduce((flat, c) => [...flat, ...c], [])

      return { prop, classes }
    })
    .filter(pair => pair.classes.includes(clas.value))
    .map(pair => pair.prop)
}

export function findProperties(clas: SingleContextClownface, context: Context) {
  const directDomains = findDirectDomain(clas, context.vocabulary)
  const unionDomains = findUnionedDomains(clas, context.vocabulary)

  return flatUnique(directDomains, unionDomains)
    .map(prop => {
      const directRanges = findDirectRanges(prop)
      const owlUnionRanges = findUnionedRanges(prop)

      return {
        term: prop,
        range: flatUnique(directRanges, owlUnionRanges),
      }
    })
    .sort((left, right) => {
      return left.term.value.localeCompare(right.term.value)
    })
}
