import { expand } from '@zazuko/rdf-vocabularies'

export function expandMapKeys<T>(overrideMap: Record<string, T> | null | undefined, namespace: string): Record<string, T> {
  if (!overrideMap) {
    return {}
  }

  return Object.entries(overrideMap)
    .reduce((newMap, [key, override]) => {
      let typeUri: string
      if (key.includes(':')) {
        typeUri = expand(key)
      } else {
        typeUri = `${namespace}${key}`
      }

      return {
        ...newMap,
        [typeUri]: override,
      }
    }, {})
}
