import cf, { GraphPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { literal } from '@rdf-esm/data-model'
import DatasetExt from 'rdf-ext/lib/Dataset'
import { schema } from '@tpluscode/rdf-ns-builders/strict'
import { createProxy } from '../lib/proxy'
import RdfResourceImpl, { RdfResource } from '../RdfResource'
import { Literal, NamedNode } from '@rdfjs/types'
import { property, ResourceIndexer } from '../index'
import { ex } from './_helpers'
import type { AnyFactory } from '../factory'

describe('proxy', () => {
  let node: GraphPointer<NamedNode, DatasetExt>

  beforeEach(() => {
    node = cf({ dataset: $rdf.dataset() })
      .namedNode(ex.Proxied)

    node.addOut(ex.Prop1, ex.Proxied2, p => {
      p.addOut(ex.Prop2, node.literal('foo', 'bar'))
    })

    node.addOut(ex.multi, ['a', 'z'])
  })

  describe('get', () => {
    it('proxies direct index access', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      const value = proxy['http://example.com/Prop1'] as RdfResource

      // then
      expect(value.id.value).toEqual('http://example.com/Proxied2')
    })

    it('works with arbitrary symbol properties', () => {
      // given
      const Foo: unique symbol = Symbol('Foo')
      const proxy = createProxy(new RdfResourceImpl(node)) as any

      // when
      proxy[Foo] = 'bar'

      // then
      expect(proxy[Foo]).toEqual('bar')
    })

    it('returns raw literals', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      const value = (proxy['http://example.com/Prop1'] as ResourceIndexer)['http://example.com/Prop2']

      // then
      expect(value).toEqual(node.literal('foo', 'bar').term)
    })

    it('returns array from multiple values', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      const value = proxy['http://example.com/multi'] as Literal[]

      // then
      expect(value.map(l => l.value)).toStrictEqual(['a', 'z'])
    })

    it('does not proxy built-in properties', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // then
      expect(proxy.id.value).toEqual('http://example.com/Proxied')
    })

    it('does not proxy declared properties', () => {
      // given
      class Specialized extends RdfResourceImpl {
        @property.literal({ type: Number, path: 'http://example.com/number', initial: 5 })
        foo!: number
      }
      const proxy = createProxy(new Specialized(node))

      // then
      expect(proxy.foo).toStrictEqual(5)
    })

    it('returns undefined for missing property', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      const value = proxy['http://example.com/foo']

      // then
      expect(value).toBeUndefined()
    })

    it('returns enumerated RDF list of literals', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)
      node.addList(ex.listOfLiterals, ['a', 'B', 'cc'])

      // when
      const listItems = proxy['http://example.com/listOfLiterals'] as Literal[]

      // then
      expect(listItems.map(l => l.value)).toEqual(
        expect.arrayContaining(['a', 'B', 'cc']),
      )
    })

    it('returns enumerated RDF list of resources', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)
      node.addList(ex.listOfUris, [
        ex.jane,
        ex.jane,
        ex.john,
      ])

      // when
      const listItems = proxy['http://example.com/listOfUris'] as RdfResource[]

      // then
      expect(listItems.map(l => l.id.value)).toEqual(
        expect.arrayContaining([ex.jane.value, ex.jane.value, ex.john.value]),
      )
    })

    it('attaches proxied resource as parent of objects', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)
      node.addOut(ex.foo, ex.bar)

      // when
      const child = proxy[ex.foo.value] as RdfResource

      // then
      expect(child._parent).toBe(resource)
    })
  })

  describe('set', () => {
    it('single literal', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      proxy[ex.set.value] = literal('foo')

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('single resource', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      proxy[ex.set.value] = new RdfResourceImpl(node.namedNode(ex.other))

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('single factory', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)
      const child: AnyFactory<RdfResourceImpl> = (pointer) => {
        return new RdfResourceImpl(pointer.blankNode(), {
          [schema.name.value]: 'Child',
        })
      }

      // when
      proxy[ex.set.value] = <any>child

      // then
      expect(node.out(ex.set).out(schema.name).value).toEqual('Child')
    })

    it('multiple literals', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      proxy[ex.set.value] = [literal('foo'), literal('bar')]

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('multiple resources', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      proxy[ex.set.value] = [
        new RdfResourceImpl(node.node(ex.one)),
        new RdfResourceImpl(node.node(ex.two)),
      ]

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('multiple factories and values', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const Baz = node.addOut(schema.name, 'Baz')
      const proxy = createProxy(resource)
      const child = (name: string): AnyFactory<RdfResourceImpl> => (pointer) => {
        return new RdfResourceImpl(pointer.blankNode(), {
          [schema.name.value]: name,
        })
      }

      // when
      proxy[ex.set.value] = <any>[child('Foo'), child('Bar'), Baz]

      // then
      expect(node.out(ex.set).out(schema.name).values).toEqual(
        expect.arrayContaining(['Foo', 'Bar', 'Baz']),
      )
    })

    it('null removes triples', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      proxy[ex.multi.value] = null

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('empty array removes triples', () => {
      // given
      const resource = new RdfResourceImpl(node)
      const proxy = createProxy(resource)

      // when
      proxy[ex.multi.value] = []

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('does not proxy declared properties', () => {
      // given
      class Specialized extends RdfResourceImpl {
        @property.literal({ type: Number, path: 'http://example.com/number', initial: 5 })
        foo!: number
      }
      const proxy = createProxy(new Specialized(node))

      // when
      proxy.foo = 10

      // then
      expect(node.dataset.toCanonical()).toMatchSnapshot()
    })
  })
})
