import { EntityProperty, EntityRange } from './index'
import { isEnumerationType } from '../util/subClasses'

export interface JavascriptProperty {
  name: string
  range: EntityRange[]
  addPath?: boolean
  term: string
  type: 'resource' | 'term' | 'literal'
}

interface RangesSplit {
  objectProperties: EntityRange[]
  datatypeProperties: EntityRange[]
}

function splitRanges(ranges: EntityRange[]): RangesSplit {
  return ranges.reduce<RangesSplit>((split, range) => {
    if (range.isLiteral) {
      split.datatypeProperties.push(range)
    } else {
      split.objectProperties.push(range)
    }

    return split
  }, {
    objectProperties: [],
    datatypeProperties: [],
  })
}

export function * fromEntityProperty(prop: EntityProperty): Iterable<JavascriptProperty> {
  const ranges = splitRanges(prop.range)

  if (ranges.datatypeProperties.length && ranges.objectProperties.length) {
    yield {
      name: prop.name,
      term: prop.name,
      range: ranges.objectProperties,
      type: 'resource',
    }

    yield {
      name: prop.name + 'Literal',
      term: prop.name,
      range: ranges.datatypeProperties,
      addPath: true,
      type: 'literal',
    }

    return
  }

  let type: JavascriptProperty['type'] = 'literal'
  if (ranges.objectProperties.length) {
    const isEnumeration = ranges.objectProperties.every(range => isEnumerationType(range.type))
    type = isEnumeration ? 'term' : 'resource'
  }

  yield {
    name: prop.name,
    term: prop.name,
    range: prop.range,
    type,
  }
}
