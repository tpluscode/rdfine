import { shrink } from '@zazuko/rdf-vocabularies'
import { RangeMapper } from './index'
import nameOf from '../util/nameOf'
import { TypeMap } from '../index'

export function defaultDatatypes(datatypes: TypeMap): RangeMapper {
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

export function classToPrefixedName(namespace: string): RangeMapper {
  return range => {
    return `${namespace}.${nameOf.term(range.type)}`
  }
}
