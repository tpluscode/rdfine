import $rdf from 'rdf-ext'
import { rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import cf, { AnyPointer } from 'clownface'
import { TypeMap } from '../../lib/types/TypeMap'
import { Context } from '../../lib'
import { fakeLog } from '../_helpers/util'
import { TermType } from '../../lib/types'
import { ex } from '../_helpers/prefix'

describe('TypeMap', () => {
  let context: Context
  let vocabulary: AnyPointer

  beforeEach(() => {
    const dataset = $rdf.dataset()
    vocabulary = cf({ dataset })
    context = {
      log: fakeLog(),
      prefix: 'ex',
      vocabulary,
      defaultExport: 'Example',
      properties: {},
    }
  })

  describe('get', () => {
    it('returns a meta object for class', () => {
      // given
      vocabulary.node(ex.Type)
        .addOut(rdf.type, rdfs.Class)
      const expected = {}
      const typeMap = new TypeMap({
        context,
        factories: [
          jest.fn().mockReturnValue(expected),
        ],
        excluded: [],
      })

      // when
      const meta = typeMap.get(vocabulary.node(ex.Type))

      // then
      expect(meta).toBe(expected)
    })

    it('returns a TermType when not found', () => {
      // given
      const typeMap = new TypeMap({
        context,
        factories: [
        ],
        excluded: [],
      })

      // when
      const meta = typeMap.get(vocabulary.node(ex.Type))

      // then
      expect(meta).toEqual({
        termType: 'Term',
        type: 'Term',
      } as TermType)
    })

    it('returns undefined when excluded', () => {
      // given
      vocabulary.node(ex.Type)
        .addOut(rdf.type, rdfs.Class)
      const typeMap = new TypeMap({
        context,
        factories: [],
        excluded: [ex.Type],
      })

      // when
      const meta = typeMap.get(vocabulary.node(ex.Type))

      // then
      expect(meta).toBeUndefined()
    })

    it('returns value verbatim when it is a literal', () => {
      const typeMap = new TypeMap({
        context,
        factories: [],
        excluded: [ex.Type],
      })

      // when
      const meta = typeMap.get(vocabulary.node('foo'))

      // then
      expect(meta).toStrictEqual({
        type: 'Constant',
        value: 'foo',
      })
    })
  })

  describe('getOrThrow', () => {
    it('throws when not found', () => {
      // given
      const typeMap = new TypeMap({
        context,
        factories: [
        ],
        excluded: [],
      })

      // then
      expect(() => {
        // when
        typeMap.getOrThrow(vocabulary.node(ex.Type))
      }).toThrow()
    })

    it('returns a meta object for class', () => {
      // given
      vocabulary.node(ex.Type)
        .addOut(rdf.type, rdfs.Class)
      const expected = {}
      const typeMap = new TypeMap({
        context,
        factories: [
          jest.fn().mockReturnValue(expected),
        ],
        excluded: [],
      })

      // when
      const meta = typeMap.getOrThrow(vocabulary.node(ex.Type))

      // then
      expect(meta).toBe(expected)
    })
  })
})
