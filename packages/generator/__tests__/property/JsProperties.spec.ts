import clownface from 'clownface'
import $rdf from 'rdf-ext'
import { doap, as, rdfs, owl } from '@tpluscode/rdf-ns-builders'
import { toJavascriptProperties } from '../../lib/property/JsProperties'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { fakeLog } from '../_helpers/util'
import { TypeMap } from '../../lib/types'
import { Range } from '../../lib/property'

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

    it('returns constant ranges for property with owl:oneOf', () => {
      // given
      const prop = clownface({ dataset: $rdf.dataset() })
        .namedNode(as.units)
        .addOut(rdfs.range, range => {
          range.addList(owl.oneOf, ['foo', 'bar', 'bar', 'baz'])
        })
      const context = {
        log: fakeLog(),
        properties: {},
        vocabulary: clownface({ dataset: $rdf.dataset() }),
        prefix: 'as',
        defaultExport: 'AS',
      }
      const typeMap = new TypeMap({
        context,
        excluded: [],
        factories: [],
      })
      const range = prop.out(rdfs.range).map((term) => ({ term, strictSemantics: true }))

      // when
      const [property] = [...toJavascriptProperties(prop, range, typeMap, context)]

      // then
      expect(property.range).toStrictEqual(
        expect.arrayContaining([
          { type: 'Constant', value: 'foo' },
          { type: 'Constant', value: 'bar' },
          { type: 'Constant', value: 'baz' },
        ]),
      )
      expect(property.range).toHaveLength(3)
    })
  })
})
