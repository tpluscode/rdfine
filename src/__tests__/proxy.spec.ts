import cf, { SingleContextClownface } from 'clownface'
import $rdf from 'rdf-ext'
import { createProxy } from '../lib/proxy'
import RdfResourceImpl from '../lib/RdfResource'
import { DatasetCore, NamedNode } from 'rdf-js'
import { property } from '..'

describe('proxy', () => {
  let node: SingleContextClownface<DatasetCore, NamedNode>

  beforeEach(() => {
    node = cf({ dataset: $rdf.dataset() })
      .namedNode('http://example.com/Proxied') as any

    node.addOut(node.namedNode('http://example.com/Prop1'), node.namedNode('http://example.com/Proxied2'), p => {
      p.addOut(node.namedNode('http://example.com/Prop2'), node.literal('foo', 'bar'))
    })
  })

  it('proxies direct index access', () => {
    // given
    const resource = new RdfResourceImpl(node)
    const proxy = createProxy(resource)

    // when
    const value = proxy['http://example.com/Prop1'][0]

    // then
    expect(value.id.value).toEqual('http://example.com/Proxied2')
  })

  it('returns raw literals', () => {
    // given
    const resource = new RdfResourceImpl(node)
    const proxy = createProxy(resource)

    // when
    const value = proxy['http://example.com/Prop1'][0]['http://example.com/Prop2'][0]

    // then
    expect(value).toEqual(node.literal('foo', 'bar').term)
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
})
