import { SingleContextClownface } from 'clownface'
import { expand, shrink } from '@zazuko/rdf-vocabularies'
import { hydra, rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import once from 'once'
import {
  EnumerationMember,
  EnumerationType,
  ExternalResourceType,
  LiteralType,
  ResourceType, TermType,
} from './index'
import { Context } from '../index'
import { toUpperInitial } from '../util/string'
import { isEnumerationType } from './util'
import { DatatypeName, wellKnownDatatypes } from './wellKnownDatatypes'

export function resourceTypes(term: SingleContextClownface, context: Pick<Context, 'prefix'>): ExternalResourceType | ResourceType | null {
  if (!term.has(rdf.type, [rdfs.Class, hydra.Class]).values.length) {
    return null
  }

  const [prefix, localName] = shrink(term.value).split(':')
  if (prefix !== context.prefix) {
    return {
      type: 'ExternalResource',
      mixinName: `${localName}Mixin`,
      module: `@rdfine/${prefix}/${localName}`,
      package: `@rdfine/${prefix}`,
      qualifiedName: toUpperInitial(`${prefix}.${localName}`),
      qualifier: toUpperInitial(prefix),
    }
  }

  return {
    type: 'Resource',
    localName,
    qualifiedName: toUpperInitial(`${prefix}.${localName}`),
    module: `./${localName}`,
    mixinName: `${localName}Mixin`,
  }
}

export function enumerationTypes(term: SingleContextClownface, context: Pick<Context, 'prefix'>): EnumerationType | null {
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

export function enumerationMembers(term: SingleContextClownface): EnumerationMember | null {
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
    case 'Date':
      nativeType = Date
      break
    default:
      return null
  }

  return {
    type: 'Literal',
    nativeName: name,
    nativeType,
  }
}

export function datatypes(term: SingleContextClownface): LiteralType | null {
  if (term.has(rdf.type, rdfs.Datatype).values.length) {
    return {
      type: 'Literal',
      nativeName: 'string',
      nativeType: String,
    }
  }

  const mapped = wellKnownDatatypes[shrink(term.value)]

  return datatypeToLiteralType(mapped)
}

export function overrides(overrideMap: Record<string, DatatypeName | 'NamedNode'> = {}) {
  const overridesMappedToUris = once((prefix: string) => {
    return Object.entries(overrideMap)
      .reduce((newMap, [key, override]) => {
        let typeUri: string
        if (key.includes(':')) {
          typeUri = expand(key)
        } else {
          typeUri = expand(`${prefix}:${key}`)
        }

        return {
          ...newMap,
          [typeUri]: override,
        }
      }, {})
  }) as ((prefix: string) => Record<string, DatatypeName | 'NamedNode'>)

  return (node: SingleContextClownface, context: Pick<Context, 'prefix'>): TermType | LiteralType | null => {
    const override = overridesMappedToUris(context.prefix)[node.value]

    if (override === 'NamedNode') {
      return {
        type: 'Term',
        termType: 'NamedNode',
      }
    }

    return datatypeToLiteralType(override)
  }
}
