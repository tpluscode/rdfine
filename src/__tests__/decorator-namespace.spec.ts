import builder from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'
import { namespace } from '..'
import RdfResource from '../lib/RdfResource'

describe('decorator', () => {
  describe('namespace', () => {
    it('sets namespace property from string', () => {
      // given
      @namespace('http://foo/')
      class WithNamespace extends RdfResource {
      }

      // when
      const ns = WithNamespace.__ns()

      // then
      expect(ns.value).toEqual('http://foo/')
    })

    it('sets namespace property from builder', () => {
      // given
      const foaf = builder(prefixes.foaf)
      @namespace(foaf)
      class WithNamespace extends RdfResource {
      }

      // when
      const ns = WithNamespace.__ns()

      // then
      expect(ns.value).toEqual(foaf('').value)
    })
  })
})
