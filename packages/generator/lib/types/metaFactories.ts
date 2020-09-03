import { GraphPointer } from 'clownface'
import { shrink } from '@zazuko/rdf-vocabularies'
import { hydra, rdf, rdfs, xsd } from '@tpluscode/rdf-ns-builders'
import {
  EnumerationMember,
  EnumerationType,
  ExternalResourceType,
  LiteralType,
  ResourceType, TermType,
} from './index'
import type { Context, TypeOverride } from '../index'
import { toUpperInitial } from '../util/string'
import { isEnumerationType } from './util'
import { DatatypeName, wellKnownDatatypes } from './wellKnownDatatypes'
import { NamedNode } from 'rdf-js'

export function resourceTypes(term: GraphPointer, context: Pick<Context, 'prefix'>): ExternalResourceType | ResourceType | null {
  const [prefix, localName] = shrink(term.value).split(':')
  if (prefix !== context.prefix) {
    return {
      type: 'ExternalResource',
      mixinName: `${localName}Mixin`,
      qualifiedMixinName: `${toUpperInitial(prefix)}.${localName}Mixin`,
      module: `@rdfine/${prefix}/${localName}`,
      package: `@rdfine/${prefix}`,
      qualifiedName: toUpperInitial(`${prefix}.${localName}`),
      qualifier: toUpperInitial(prefix),
    }
  }

  if (!term.has(rdf.type, [rdfs.Class, hydra.Class]).values.length) {
    return null
  }

  return {
    type: 'Resource',
    localName,
    qualifiedName: toUpperInitial(`${prefix}.${localName}`),
    module: `./${localName}`,
    mixinName: `${localName}Mixin`,
  }
}

export function enumerationTypes(term: GraphPointer, context: Pick<Context, 'prefix'>): EnumerationType | null {
  if (!term.has(rdf.type, rdfs.Class).values.length || !isEnumerationType(term)) {
    return null
  }

  const [prefix, name] = shrink(term.value).split(':')
  if (prefix !== context.prefix) {
    return null
  }

  return {
    type: 'Enumeration',
    name,
    module: `./${name}`,
    qualifiedName: toUpperInitial(`${prefix}.${name}`),
  }
}

export function enumerationMembers(term: GraphPointer): EnumerationMember | null {
  if (term.out(rdf.type).toArray().find(isEnumerationType)) {
    const [prefix, name] = shrink(term.value).split(':')
    return {
      type: 'EnumerationMember',
      termName: name,
      prefixedName: `${prefix}.${name}`,
    }
  }

  return null
}

function datatypeToLiteralType(name: DatatypeName): LiteralType | null {
  let nativeType: any
  let datatype: NamedNode | undefined
  let nativeName = name
  switch (name) {
    case 'string':
      nativeType = String
      break
    case 'boolean':
      nativeType = Boolean
      break
    case 'number':
      nativeType = Number
      break
    case 'DateTime':
      nativeType = Date
      nativeName = 'Date'
      break
    case 'Date':
      nativeType = Date
      datatype = xsd.date
      break
    case 'Time':
      nativeType = Date
      datatype = xsd.time
      nativeName = 'Date'
      break
    default:
      return null
  }

  return {
    type: 'Literal',
    nativeName,
    nativeType,
    datatype,
  }
}

export function datatypes(term: GraphPointer<NamedNode>): LiteralType | null {
  const wellKnownDatatype = wellKnownDatatypes[shrink(term.value)]

  if (term.has(rdf.type, rdfs.Datatype).values.length) {
    return {
      type: 'Literal',
      nativeName: 'string',
      nativeType: String,
      datatype: !wellKnownDatatype ? term.term : undefined,
    }
  }

  return datatypeToLiteralType(wellKnownDatatype)
}

export function overrides(overrideMap: Record<string, TypeOverride> = {}) {
  return (node: GraphPointer<NamedNode>): TermType | LiteralType | null => {
    const override = overrideMap[node.value]

    if (override === 'NamedNode') {
      return {
        type: 'Term',
        termType: 'NamedNode',
      }
    }

    if (override === 'Datatype') {
      return {
        type: 'Literal',
        nativeName: 'string',
        nativeType: String,
        datatype: node.term,
      }
    }

    return datatypeToLiteralType(override)
  }
}
