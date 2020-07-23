import { AnyPointer, GraphPointer } from 'clownface'
import { Context } from '../index'
import { owl, rdfs, schema } from '@tpluscode/rdf-ns-builders'

export type Range = {
  term: GraphPointer
  strictSemantics: boolean
}

function findDirectRanges(prop: GraphPointer): Range[] {
  const looseSemantics = prop.out(schema.rangeIncludes)
    .filter(node => node.term.termType === 'NamedNode')
    .map(term => ({ term, strictSemantics: false }))

  const strictSemantics = prop.out(rdfs.range)
    .filter(node => node.term.termType === 'NamedNode')
    .map(term => ({ term, strictSemantics: true }))

  return [...strictSemantics, ...looseSemantics]
}

function findUnionedRanges(prop: GraphPointer): Range[] {
  const lists = prop.out(rdfs.range)
    .out([owl.unionOf, owl.disjointUnionOf])

  return [...lists.list()!].map(term => ({ term, strictSemantics: true }))
}

function flatUnique(...terms: GraphPointer[][]): GraphPointer[] {
  return [...terms.reduce((set, terms) => {
    return terms.reduce((set, term) => {
      set.add(term)
      return set
    }, set)
  }, new Set<GraphPointer>())]
}

function flatUniqueRanges(...terms: Range[][]): Range[] {
  return [...terms.reduce((map, terms) => {
    return terms.reduce((map, range) => {
      if (!map.has(range.term.value)) {
        map.set(range.term.value, range)
      }
      return map
    }, map)
  }, new Map<string, Range>()).values()]
}

function findDirectDomain(clas: GraphPointer, vocabulary: AnyPointer): GraphPointer[] {
  return vocabulary.has([schema.domainIncludes, rdfs.domain], clas).toArray()
}

function findUnionedDomains(clas: GraphPointer, vocabulary: AnyPointer): GraphPointer[] {
  return vocabulary.has(rdfs.domain)
    .map(prop => {
      const classes = prop.out(rdfs.domain).out([owl.unionOf, owl.disjointUnionOf])
        .map(union => [...union.list()!].map(c => c.value))
        .reduce((flat, c) => [...flat, ...c], [])

      return { prop, classes }
    })
    .filter(pair => pair.classes.includes(clas.value))
    .map(pair => pair.prop)
}

export function findProperties(clas: GraphPointer, context: Pick<Context, 'vocabulary'>) {
  const directDomains = findDirectDomain(clas, context.vocabulary)
  const unionDomains = findUnionedDomains(clas, context.vocabulary)

  return flatUnique(directDomains, unionDomains)
    .map(prop => {
      const directRanges = findDirectRanges(prop)
      const owlUnionRanges = findUnionedRanges(prop)

      return {
        term: prop,
        range: flatUniqueRanges(directRanges, owlUnionRanges),
      }
    })
    .sort((left, right) => {
      return left.term.value.localeCompare(right.term.value)
    })
}
