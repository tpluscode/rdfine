import cf, { SingleContextClownface } from 'clownface'
import $rdf from 'rdf-ext'
import namespace from '@rdfjs/namespace'
import { createProxy } from '../lib/proxy'
import RdfResourceImpl from '../lib/RdfResource'
import { DatasetCore, Literal, NamedNode } from 'rdf-js'
import { property } from '..'

const ex = namespace('http://example.com/')

describe('proxy', () => {
  let node: SingleContextClownface<DatasetCore, NamedNode>

  beforeEach(() => {
    node = cf({ dataset: $rdf.dataset() })
      .namedNode(ex.Proxied) as any

    node.addOut(ex.Prop1, ex.Proxied2, p => {
      p.addOut(ex.Prop2, node.literal('foo', 'bar'))
    })

    node.addOut(ex.multi, ['a', 'z'])
  })

  it('proxies direct index access', () => {
    // given
    const resource = new RdfResourceImpl(node)
    const proxy = createProxy(resource)

    // when
    const value = proxy['http://example.com/Prop1']

    // then
    expect(value.id.value).toEqual('http://example.com/Proxied2')
  })

  it('returns raw literals', () => {
    // given
    const resource = new RdfResourceImpl(node)
    const proxy = createProxy(resource)

    // when
    const value = proxy['http://example.com/Prop1']['http://example.com/Prop2']

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
})
