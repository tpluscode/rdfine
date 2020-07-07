import cf, { Clownface } from 'clownface'
import $rdf from 'rdf-ext'
import { NamedNode, Term } from 'rdf-js'
import { defaultGraph, namedNode, literal, blankNode } from '@rdfjs/data-model'
import { skos } from '@tpluscode/rdf-ns-builders'
import RdfResource, { Initializer } from '../RdfResource'
import { parse, vocabs } from './_helpers'
import { property } from '../index'

const { ex } = vocabs

describe('RdfResource', () => {
  describe('constructor', () => {
    it('throws when node is literal', () => {
      expect(() => {
        const node = cf({ dataset: $rdf.dataset() }).literal('foo')

        return new RdfResource(node)
      }).toThrow()
    })

    it('throws when context represents multiple nodes', () => {
      expect(() => {
        const node = cf({
          dataset: $rdf.dataset(),
          term: [$rdf.blankNode(), $rdf.blankNode()],
        })

        return new RdfResource(node as any)
      }).toThrow()
    })
  })

  describe('equals', () => {
    it('compares id term', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).namedNode('urn:foo:bar')
      const left = new RdfResource(node)
      const right = new RdfResource(node)

      // when
      const areEqual = left.equals(right)

      // then
      expect(areEqual).toBe(true)
    })

    it('compares id with term value', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).namedNode('urn:foo:bar')
      const left = new RdfResource(node)
      const right = $rdf.namedNode('urn:foo:bar')

      // when
      const areEqual = left.equals(right)

      // then
      expect(areEqual).toBe(true)
    })

    it('compares id with graph pointer value', () => {
      // given
      const graph = cf({ dataset: $rdf.dataset() })
      const node = graph.namedNode('urn:foo:bar')
      const left = new RdfResource(node)
      const right = graph.namedNode('urn:foo:bar')

      // when
      const areEqual = left.equals(right)

      // then
      expect(areEqual).toBe(true)
    })

    it('returns false if other resource is falsy', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).namedNode('urn:foo:bar')
      const left = new RdfResource(node)

      // when
      const areEqual = left.equals(null)

      // then
      expect(areEqual).toBe(false)
    })

    it('returns true if "same" blank node is from from same dataset', () => {
      // given
      const dataset = $rdf.dataset()
      const foo = cf({ dataset }).blankNode('foo')
      const bar = cf({ dataset }).blankNode('foo')
      const left = new RdfResource(foo)
      const right = new RdfResource(bar)

      // when
      const areEqual = left.equals(right)

      // then
      expect(areEqual).toBe(true)
    })
  })

  describe('_graphId', () => {
    it('returns the clownface context graph', () => {
      // given
      const node = cf({ dataset: $rdf.dataset(), graph: ex.graph }).blankNode()

      // when
      const res = new RdfResource(node)

      // then
      expect(res._graphId.equals(ex.graph))
    })

    it('is default graph when not initialized explicitly', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const res = new RdfResource(node)

      // then
      expect(res._graphId.equals(defaultGraph()))
    })
  })

  describe('types', () => {
    it('returns an iterable set of resource\'s types', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      `)
      const node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new RdfResource(node).types

      // then
      expect([...tc.values()].map(r => r.id)).toEqual(
        expect.arrayContaining([
          ex.Type1, ex.Type2, ex.Type3, ex.Type4,
        ]),
      )
    })
  })

  describe('initializeProperties', () => {
    it('skips id', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.literal({ path: ex.name })
        name!: string;
      }

      // when
      const resource = new ResourceImpl(node, {
        id: ex.Foo,
        name: 'baz',
      })

      // then
      expect(resource.name).toEqual('baz')
      expect(resource.id.termType).toEqual('BlankNode')
      expect(resource.types.size).toEqual(0)
    })

    it('allows RDF/JS literal to initialize literal properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.literal({ path: ex.name })
        name!: string;
      }
      const initializer: Initializer<Resource> = {
        name: literal('baz'),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.name).toEqual('baz')
    })

    it('allows RDF/JS literal to initialize literal array properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        names: string[]
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.literal({ path: ex.name, values: 'array' })
        names!: string[];
      }
      const initializer: Initializer<Resource> = {
        names: [literal('bar'), node.literal('baz')],
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.names).toEqual(
        expect.arrayContaining(['bar', 'baz']),
      )
    })

    it('allows clownface literal to initialize literal properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.literal({ path: ex.name })
        name!: string;
      }
      const initializer: Initializer<Resource> = {
        name: node.literal('baz'),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.name).toEqual('baz')
    })

    it('allows RDF/JS named node to initialize resource properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        other: Resource
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.resource({ path: ex.other })
        other!: Resource;
      }
      const initializer: Initializer<Resource> = {
        other: namedNode('baz'),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.other.id).toEqual(namedNode('baz'))
    })

    it('allows clownface named node to initialize named node properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        other: NamedNode
        others: NamedNode[]
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property({ path: ex.other })
        other!: NamedNode;

        @property({ path: ex.others, values: 'array' })
        others!: NamedNode[];
      }
      const initializer: Initializer<Resource> = {
        other: node.namedNode('bar'),
        others: [node.namedNode('baz')],
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.other).toEqual(namedNode('bar'))
      expect(resource.others).toEqual(
        expect.arrayContaining([namedNode('baz')]),
      )
    })

    it('allows clownface node to initialize term properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        other: Term
        others: Term[]
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property({ path: ex.other, values: 'array' })
        other!: Term;

        @property({ path: ex.others, values: 'array' })
        others!: Term[];
      }
      const initializer: Initializer<Resource> = {
        other: node.blankNode(),
        others: [node.blankNode(), literal('foo'), namedNode('bar'), node.namedNode('baz')],
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.others).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ termType: 'BlankNode' }),
          literal('foo'),
          namedNode('bar'),
          namedNode('baz'),
        ]),
      )
    })

    it('allows RDF/JS blank node to initialize resource properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        other: Resource
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.resource({ path: ex.other })
        other!: Resource;
      }
      const initializer: Initializer<Resource> = {
        other: blankNode(),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.other.id.termType).toEqual('BlankNode')
    })

    it('allows RDF/JS nodes to initialize array resource properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        others: Resource[]
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.resource({ path: ex.other, values: 'array' })
        others!: Resource[];
      }
      const initializer: Initializer<Resource> = {
        others: [blankNode(), namedNode('bar'), node.blankNode(), node.namedNode('baz')],
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.others.map(o => o.id)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ termType: 'BlankNode' }),
          namedNode('bar'),
          expect.objectContaining({ termType: 'BlankNode' }),
          namedNode('baz'),
        ]),
      )
    })

    it('add additional types', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        name!: string;
      }

      // when
      const resource = new ResourceImpl(node, {
        types: [ex.Bar],
      })

      // then
      expect(resource.types.size).toEqual(1)
      expect([...resource.types][0].id.value).toEqual(ex.Bar.value)
    })

    it('allows arbitrary string as RDF property', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const resource = new RdfResource(node, {
        [skos.prefLabel.value]: 'Foo',
        [skos.broader.value]: {
          [skos.prefLabel.value]: 'Bar',
        },
      })

      // then
      expect(resource.getString(skos.prefLabel)).toEqual('Foo')
      expect(resource.get(skos.broader)!.getString(skos.prefLabel)).toEqual('Bar')
    })

    it('assigns id to nested resource assigned to arbitrary URI', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const resource = new RdfResource(node, {
        [skos.prefLabel.value]: 'Foo',
        [skos.broader.value]: {
          id: ex.Bar,
        },
      })

      // then
      expect(resource.getString(skos.prefLabel)).toEqual('Foo')
      expect(resource.get(skos.broader)!.id.value).toEqual(ex.Bar.value)
    })

    it('assigns named node to arbitrary URI property', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const resource = new RdfResource(node, {
        [skos.broader.value]: ex.Bar,
      })

      // then
      expect(resource.get(skos.broader)!.id.value).toEqual(ex.Bar.value)
    })

    it('assigns literal node to arbitrary URI property', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const resource = new RdfResource(node, {
        [skos.prefLabel.value]: $rdf.literal('Foo', 'en'),
      })

      // then
      expect(resource._selfGraph.dataset).toMatchSnapshot()
    })
  })

  describe('isAnonymous', () => {
    it('true for blank node', () => {
      // given
      const node = cf({ dataset: $rdf.dataset(), graph: ex.graph }).blankNode()

      // when
      const res = new RdfResource(node)

      // then
      expect(res.isAnonymous).toBe(true)
    })

    it('false for named node', () => {
      // given
      const node = cf({ dataset: $rdf.dataset(), graph: ex.graph }).namedNode(ex.foo)

      // when
      const res = new RdfResource(node)

      // then
      expect(res.isAnonymous).toBe(false)
    })
  })

  describe('getters', () => {
    let graph: Clownface

    beforeEach(() => {
      graph = cf({ dataset: $rdf.dataset() })
    })

    describe('get', () => {
      it('returns object resource', () => {
        // given
        const node = graph.blankNode()
        node.addOut(ex.foo, ex.bar)
        const resource = new RdfResource(node)

        // when
        const object = resource.get(ex.foo)

        // then
        expect(object).toBeInstanceOf(RdfResource)
        expect(object?.id.value).toEqual(ex.bar.value)
      })

      it('throws when property has no value and calling strict', () => {
        // given
        const node = graph.blankNode()
        const resource = new RdfResource(node)

        // then
        expect(() => {
          // when
          return resource.get(ex.foo, { strict: true })
        }).toThrow()
      })

      it('returns null when property has no value and calling not strict', () => {
        // given
        const node = graph.blankNode()
        const resource = new RdfResource(node)

        // when
        const object = resource.get(ex.foo, { strict: false })

        // then
        expect(object).toBeNull()
      })
    })

    describe('getArray', () => {
      it('returns empty array when property has no value and calling not strict', () => {
        // given
        const node = graph.blankNode()
        const resource = new RdfResource(node)

        // when
        const object = resource.getArray(ex.foo, { strict: false })

        // then
        expect(object.length).toBe(0)
      })

      it('skips literals', () => {
        // given
        const node = graph.blankNode()
        node.addOut(ex.foo, graph.literal('bar'))
        const resource = new RdfResource(node)

        // when
        const object = resource.getArray(ex.foo, { strict: false })

        // then
        expect(object.length).toBe(0)
      })
    })

    describe('getBoolean', () => {
      it('throws when value is not boolean', () => {
        const node = graph.blankNode()
        node.addOut(ex.foo, ex.bar)
        const resource = new RdfResource(node)

        // then
        expect(() => resource.getBoolean(ex.foo)).toThrow()
      })

      it('return false when value is undefined', () => {
        const node = graph.blankNode()
        const resource = new RdfResource(node)

        // then
        expect(resource.getBoolean(ex.foo)).toBeFalsy()
      })

      it('return the value when it is set', () => {
        const node = graph.blankNode()
        node.addOut(ex.foo, true)
        const resource = new RdfResource(node)

        // then
        expect(resource.getBoolean(ex.foo)).toBeTruthy()
      })
    })

    describe('getNumber', () => {
      it('throws when value is not number', () => {
        const node = graph.blankNode()
        node.addOut(ex.foo, ex.bar)
        const resource = new RdfResource(node)

        // then
        expect(() => resource.getNumber(ex.foo)).toThrow()
      })

      it('return null when value is undefined', () => {
        const node = graph.blankNode()
        const resource = new RdfResource(node)

        // then
        expect(resource.getNumber('foo')).toBeNull()
      })

      it('parses the literal', () => {
        const node = graph.blankNode()
        node.addOut(ex.foo, node.literal(10.5))
        const resource = new RdfResource(node)

        // then
        expect(resource.getNumber(ex.foo)).toBe(10.5)
      })
    })

    describe('getString', () => {
      it('returns string value of literal', () => {
        const node = graph.blankNode()
        node.addOut(ex.foo, 123)
        const resource = new RdfResource(node)

        // then
        expect(resource.getString(ex.foo)).toBe('123')
      })

      it('return null when value is undefined', () => {
        const node = graph.blankNode()
        const resource = new RdfResource(node)

        // then
        expect(resource.getString(ex.foo)).toBeNull()
      })
    })
  })
})
