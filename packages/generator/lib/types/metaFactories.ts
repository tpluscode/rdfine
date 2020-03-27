import { SingleContextClownface } from 'clownface'
import { shrink } from '@zazuko/rdf-vocabularies'
import { rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import { EnumerationMember, EnumerationType, LiteralType, ResourceType, TypeMetaFactory } from './index'
import { Context } from '../index'
import { toUpperInitial } from '../util/string'
import { isEnumerationType } from './util'
import { wellKnownDatatypes } from './wellKnownDatatypes'

export function resourceTypes(term: SingleContextClownface, context: Context): ResourceType | null {
  if (!term.has(rdf.type, rdfs.Class).values.length) {
    return null
  }

  const [prefix, localName] = shrink(term.value).split(':')
  if (prefix !== context.prefix) {
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

export function enumerationTypes(term: SingleContextClownface, context: Context): EnumerationType | null {
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

export function knownDatatypes(userDatatypes: typeof wellKnownDatatypes): TypeMetaFactory<LiteralType> {
  const datatypes: typeof wellKnownDatatypes = {
    ...wellKnownDatatypes,
    ...userDatatypes,
  }

  return (term: SingleContextClownface) => {
    const mapped = datatypes[shrink(term.value)]
    if (!mapped) return null

    let nativeType: any
    switch (mapped) {
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
      nativeName: mapped,
      nativeType,
    }
  }
}

/*
export function knownDatatypes(datatypes: TypeMap): TypeMetaFactory {
  return range => {
    const mapped = datatypes[shrink(range.type.value)]
    switch (mapped) {
      case 'number':
      case 'boolean':
      case 'string':
      case 'Date':
        return datatypes[shrink(range.type.value)]
      case 'NamedNode':
        return `rdf.${mapped}`
    }

    return null
  }
}

export function anyLiteral(): RangeMapper {
  return range => {
    if (range.isLiteral) {
      return 'string'
    }

    return null
  }
}

export function selfInterfaceName(typeName: string): RangeMapper {
  return range => {
    const name = nameOf.term(range.type)
    if (name === typeName) {
      return name
    }

    return null
  }
}

export function externalTerm(prefix: string): RangeMapper {
  return range => {
    const term = range.type.term
    if (term.equals(rdfs.Resource) || term.equals(owl.Thing)) {
      return 'RdfResource'
    }

    const shrunk = shrink(term.value).split(':')
    if (shrunk[0] !== prefix) {
      return `${prefix.replace(/^\w/, initial => initial.toUpperCase())}.${shrunk[1]}`
    }

    return null
  }
}

export function classToPrefixedName(namespace: string): RangeMapper {
  return range => {
    return `${namespace}.${nameOf.term(range.type)}`
  }
}
*/
