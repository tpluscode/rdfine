import { createFactory } from '../factory'
import { Constructor } from '../lib/ResourceFactory'
import { RdfResource } from '../RdfResource'
import { property } from '../lib/decorators'
import { ex } from './_helpers'
import clownface from 'clownface'
import $rdf from 'rdf-ext'

interface TestResource extends RdfResource {
  foo?: string
  bar?: string
}

function TestMixin<Base extends Constructor>(Resource: Base) {
  class Impl extends Resource implements TestResource {
    @property.literal({ path: ex.foo })
    foo?: string

    @property.literal({ path: ex.bar })
    bar?: string
  }

  return Impl
}

function blankNode(id?: string) {
  return clownface({ dataset: $rdf.dataset() }).blankNode(id)
}

describe('@tpluscode/rdfine/factory', () => {
  describe('with pointer argument', () => {
    it('creates resource initialized with defaults', () => {
      // given
      const factory = createFactory<TestResource>([TestMixin], {
        foo: 'foo',
      })

      // when
      const res = factory(blankNode())

      // then
      expect(res.foo).toEqual('foo')
      expect(res.bar).toBeUndefined()
    })

    it('creates resource initialized with overrides', () => {
      // given
      const factory = createFactory<TestResource>([TestMixin], {
        foo: 'foo',
      })

      // when
      const res = factory(blankNode(), {
        foo: 'bar',
        bar: 'foo',
      })

      // then
      expect(res.foo).toEqual('bar')
      expect(res.bar).toEqual('foo')
    })
  })

  describe('curried with named node', () => {
    it('creates resource with URI provided as string', () => {
      // given
      const factory = createFactory<TestResource>([TestMixin], {})
      const curriedFactory = factory('http://foo.bar/baz', { foo: 'bar' })

      // when
      const res = curriedFactory(blankNode())

      // then
      expect(res.id).toEqual($rdf.namedNode('http://foo.bar/baz'))
    })

    it('creates resource with URI provided as Term', () => {
      // given
      const factory = createFactory<TestResource>([TestMixin], {})
      const curriedFactory = factory($rdf.namedNode('http://foo.bar/baz'), { foo: 'bar' })

      // when
      const res = curriedFactory(blankNode())

      // then
      expect(res.id).toStrictEqual($rdf.namedNode('http://foo.bar/baz'))
    })
  })

  describe('curried without node', () => {
    it('creates a blank node resource', () => {
      // given
      const factory = createFactory<TestResource>([TestMixin], {})
      const curriedFactory = factory({ foo: 'bar' })

      // when
      const res = curriedFactory(blankNode('foo'))

      // then
      expect(res.id.termType).toEqual('BlankNode')
      expect(res.id.value).not.toEqual('foo')
    })
  })
})
