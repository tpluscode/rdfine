import { SingleContextClownface } from 'clownface'
import { shrink } from '@zazuko/rdf-vocabularies'
import { Term } from 'rdf-js'
import { TypeMeta, TypeMetaCollection } from '../types'
import { Context } from '../index'
import { nameOf } from '../util/nameOf'
import { Range } from './index'

export interface JavascriptProperty {
  semantics: 'strict' | 'loose' | undefined
  name: string
  range: TypeMeta[]
  term: Term
  termName: string
  prefixedTerm: string
  type: 'resource' | 'term' | 'literal'
}

function groupRangeTypes(range: Range[], types: TypeMetaCollection, { log }: Context) {
  const grouped = {
    resource: [] as TypeMeta[],
    literal: [] as TypeMeta[],
    term: [] as TypeMeta[],
  }

  for (const rangeType of range) {
    const meta = types.get(rangeType.term)
    if (!meta) {
      log.warn(`Skipping unrecognized property type ${rangeType.term.value}`)
      continue
    }

    switch (meta.type) {
      case 'Literal':
        grouped.literal.push(meta)
        continue
      case 'Resource':
      case 'ExternalResource':
        grouped.resource.push(meta)
        continue
      default:
        grouped.term.push(meta)
    }
  }

  return grouped
}

export function * toJavascriptProperties(prop: SingleContextClownface, range: Range[], types: TypeMetaCollection, context: Context): Iterable<JavascriptProperty> {
  const ranges = groupRangeTypes(range, types, context)
  const baseProperty: Omit<JavascriptProperty, 'type' | 'range'> = {
    semantics: undefined,
    term: prop.term,
    name: nameOf(prop),
    termName: nameOf(prop),
    prefixedTerm: (shrink(prop.value) || nameOf(prop)).replace(':', '.'),
  }
  let resourceProperty: JavascriptProperty | null = null
  let literalProperty: JavascriptProperty | null = null
  let termProperty: JavascriptProperty | null = null

  if (ranges.resource.length) {
    const semantics = range.every(r => r.strictSemantics) ? 'strict' : 'loose'

    resourceProperty = {
      ...baseProperty,
      range: ranges.resource,
      type: 'resource',
      semantics,
    }
  }

  if (ranges.literal.length) {
    const name = ranges.resource.length ? `${baseProperty.name}Literal` : baseProperty.name
    literalProperty = {
      ...baseProperty,
      name,
      range: ranges.literal,
      type: 'literal',
    }
  }

  if ((ranges.term.length && !ranges.resource.length) || (!ranges.literal.length && !ranges.resource.length)) {
    const name = ranges.literal.length ? `${baseProperty.name}Term` : baseProperty.name
    termProperty = {
      ...baseProperty,
      name,
      range: ranges.term,
      type: 'term',
    }
  }

  if (resourceProperty) yield resourceProperty
  if (literalProperty) yield literalProperty
  if (termProperty) yield termProperty
}
