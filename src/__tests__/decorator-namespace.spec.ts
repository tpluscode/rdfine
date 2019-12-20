import { namespace } from '..'
import RdfResource from '../lib/RdfResource'

describe('decorator', () => {
  describe('namespace', () => {
    it('sets namespace property', () => {
      // given
      @namespace('http://foo/')
      class WithNamespace extends RdfResource {
      }

      // when
      const ns = WithNamespace.__ns()

      // then
      expect(ns.value).toEqual('http://foo/')
    })
  })
})
