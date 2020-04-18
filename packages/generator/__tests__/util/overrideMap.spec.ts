import { schema } from '@tpluscode/rdf-ns-builders'
import { expandMapKeys } from '../../lib/util/overrideMap'

describe('util/overrideMap', () => {
  describe('expandMapKeys', () => {
    it('returns empty object when map is falsy', () => {
      // when
      const result = expandMapKeys(null, 'ex')

      // then
      expect(result).toEqual({})
    })

    it('expands prefixed names of known vocabularies', () => {
      // given
      const map = {
        'schema:name': 'bar',
      }

      // when
      const result = expandMapKeys(map, 'ex')

      // then
      expect(result).toEqual({
        [schema.name.value]: 'bar',
      })
    })

    it('expands term name of current prefix', () => {
      // given
      const map = {
        name: 'bar',
      }

      // when
      const result = expandMapKeys(map, 'http://example.com/')

      // then
      expect(result).toEqual({
        'http://example.com/name': 'bar',
      })
    })
  })
})
