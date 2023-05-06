import { schema } from '@tpluscode/rdf-ns-builders'
import { expandMapKeys } from '../../lib/util/overrideMap.js'
import {expect} from "chai";

describe('util/overrideMap', () => {
  describe('expandMapKeys', () => {
    it('returns empty object when map is falsy', () => {
      // when
      const result = expandMapKeys(null, 'ex')

      // then
      expect(result).to.eq({})
    })

    it('expands prefixed names of known vocabularies', () => {
      // given
      const map = {
        'schema:name': 'bar',
      }

      // when
      const result = expandMapKeys(map, 'ex')

      // then
      expect(result).to.eq({
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
      expect(result).to.eq({
        'http://example.com/name': 'bar',
      })
    })
  })
})
