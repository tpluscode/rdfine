import { schema } from '@tpluscode/rdf-ns-builders'
import { shrink } from '@zazuko/rdf-vocabularies'
import { RangeMapper } from './index'
import nameOf from '../util/nameOf'

export function defaultDatatypes(datatypes: Record<string, string>): RangeMapper {
  return range => {
    return datatypes[shrink(range.type.value)]
  }
}

export function schemaUrl(): RangeMapper {
  return range => {
    if (range.type.term.equals(schema.URL)) {
      return 'RdfResource'
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
