import clownface from 'clownface'
import $rdf from 'rdf-ext'
import { doap } from '@tpluscode/rdf-ns-builders'
import { toJavascriptProperties } from '../../lib/property/JsProperties'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { fakeLog } from '../_helpers/util'

describe('JsProperties', () => {
  describe('toJavascriptProperties', () => {
    it('uses index access for property with non-alpha characters in name', () => {
      // given
      const prop = clownface({ dataset: $rdf.dataset() })
        .namedNode(doap['file-release'])
      const context = {
        log: fakeLog(),
        properties: {},
      }

      // when
      const [property] = [...toJavascriptProperties(prop, [], new FakeTypeCollection(), context)]

      // then
      expect(property.prefixedTerm).toEqual("doap['file-release']")
    })
  })
})
