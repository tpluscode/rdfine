import cf, { AnyPointer } from 'clownface'
import $rdf from 'rdf-ext'
import type { NamedNode, Term, Literal } from '@rdfjs/types'
import {
  defaultGraph,
  namedNode,
  literal,
  blankNode,
} from '@rdf-esm/data-model'
import {
  skos,
  rdf,
  schema,
  foaf,
  xsd,
  dcterms,
  rdfs,
  sh,
} from '@tpluscode/rdf-ns-builders/loose'
import RdfResource, { Initializer, RdfResourceCore, ResourceNode } from '../RdfResource'
import { parse, ex } from './_helpers'
import { Constructor, crossBoundaries, namespace, property, ResourceFactory } from '../index'

describe('RdfResource', () => {
  describe('constructor', () => {
    it('throws when node is literal', () => {
      expect(() => {
        const node = cf({ dataset: $rdf.dataset() }).literal('foo')

        return new RdfResource(node as any)
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
    it("returns an iterable set of resource's types", async () => {
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
        expect.arrayContaining([ex.Type1, ex.Type2, ex.Type3, ex.Type4]),
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

    it('allows RDF/JS literal to initialize optional literal properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string | undefined
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
      expect(resource.names).toEqual(expect.arrayContaining(['bar', 'baz']))
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
        others: [
          node.blankNode(),
          literal('foo'),
          namedNode('bar'),
          node.namedNode('baz'),
        ],
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
        others: [
          blankNode(),
          namedNode('bar'),
          node.blankNode(),
          node.namedNode('baz'),
        ],
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
      expect(resource.get(skos.broader)!.getString(skos.prefLabel)).toEqual(
        'Bar',
      )
    })

    it('allows arbitrary string as RDF property using typed initializer', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      class Concept extends RdfResource {
        @property.literal({ path: skos.prefLabel })
        prefLabel!: string;

        // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-useless-constructor
        constructor(pointer: ResourceNode, init: Initializer<Concept>) {
          super(pointer, init)
        }
      }

      // when
      const resource = new Concept(node, {
        [skos.prefLabel.value]: 'Foo',
      })

      // then
      expect(resource.prefLabel).toEqual('Foo')
    })

    it('initializes annotated property with nested array of resources which use http properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      class SkosResource extends RdfResource {
        @property.resource({ path: skos.broader, values: 'array' })
        broader!: SkosResource[];
      }

      // when
      const resource = new SkosResource(node, {
        broader: [
          {
            [skos.prefLabel.value]: 'Bar',
          },
        ],
      })

      // then
      expect(resource.broader[0].getString(skos.prefLabel)).toEqual('Bar')
    })

    it('initializes T|T[] property with IRI', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      class SkosResource extends RdfResource {
        @property.resource({ path: skos.broader, values: 'array' })
        broader!: SkosResource[] | SkosResource;
      }

      // when
      const resource = new SkosResource(node, {
        broader: ex.Foo,
      })

      // then
      expect(resource.pointer.dataset).toMatchSnapshot()
    })

    it('initializes annotated property with a resource using http properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      class SkosResource extends RdfResource {
        @property.resource({ path: skos.broader })
        broader!: SkosResource;
      }

      // when
      const resource = new SkosResource(node, {
        broader: {
          [skos.prefLabel.value]: 'Bar',
        },
      })

      // then
      expect(resource.broader.getString(skos.prefLabel)).toEqual('Bar')
    })

    it('initializes nested array resources which use http properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const resource = new RdfResource(node, {
        [skos.broader.value]: [
          {
            [skos.prefLabel.value]: 'Bar',
          },
        ],
      })

      // then
      expect(resource.get(skos.broader)!.getString(skos.prefLabel)).toEqual(
        'Bar',
      )
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
      expect(resource.pointer.dataset).toMatchSnapshot()
    })

    it('can initialize child resource with object decomposition', () => {
      // given
      class Child extends RdfResource {
        @property.literal({ path: ex.foo })
        foo?: string;

        @property.literal({ path: ex.bar })
        bar?: string;
      }
      class Decomposed extends RdfResource {
        @property.resource({ path: ex.child, as: [Child] })
        child?: Decomposed;
      }
      const child = new Child(cf({ dataset: $rdf.dataset() }).blankNode(), {
        foo: 'foo',
        bar: 'bar',
      })

      // when
      const resource = new Decomposed(
        cf({ dataset: $rdf.dataset() }).blankNode(),
        {
          child: {
            ...child.toJSON(),
            types: [ex.Copy],
          },
        },
      )

      // then
      expect(resource.pointer.dataset).toMatchSnapshot()
    })

    it('can initialize child resource with string blank node id', () => {
      // given
      class Resource extends RdfResource {
        @property.resource({ path: ex.foo })
        foo!: RdfResource;
      }

      // when
      const resource = new Resource(
        cf({ dataset: $rdf.dataset() }).blankNode(),
        {
          foo: {
            id: '_:blank-one',
          },
          [ex.bar.value]: {
            id: '_:blank-two',
          },
        },
      )

      // then
      expect(resource.pointer.dataset).toMatchSnapshot()
    })

    it('can initialize child resource with string named node id', () => {
      // given
      class Resource extends RdfResource {
        @property.resource({ path: ex.foo })
        foo!: RdfResource;
      }

      // when
      const resource = new Resource(
        cf({ dataset: $rdf.dataset() }).blankNode(),
        {
          foo: {
            id: ex.Child.value,
          },
          [ex.bar.value]: {
            id: ex.Child.value,
          },
        },
      )

      // then
      expect(resource.pointer.dataset).toMatchSnapshot()
    })

    it('uses implicitTypes of annotated properties to initialize child resources', () => {
      // given
      class Resource extends RdfResource {
        @property.resource({ path: ex.foo, implicitTypes: [ex.Foo, ex.Bar] })
        foo!: RdfResource;
      }

      // when
      const resource = new Resource(
        cf({ dataset: $rdf.dataset() }).blankNode(),
        {
          foo: {
            [rdfs.label.value]: 'foo',
          },
        },
      )

      // then
      expect(resource.pointer.dataset).toMatchSnapshot()
    })

    const nativeSetters: [string, any, Literal][] = [
      ['Date', new Date(Date.UTC(2000, 5, 6, 10, 56, 40)), $rdf.literal('2000-06-06T10:56:40.000Z', xsd.dateTime)],
      ['integer', 5, $rdf.literal('5', xsd.integer)],
      ['decimal', 4.5, $rdf.literal('4.5', xsd.float)],
      ['boolean', true, $rdf.literal('true', xsd.boolean)],
    ]

    describe('setting built-in types', () => {
      for (const [name, value, term] of nativeSetters) {
        it(`initializes from native ${name} value`, () => {
        // when
          const resource = new RdfResource(
            cf({ dataset: $rdf.dataset() }).blankNode(), {
              [ex.prop.value]: value,
            },
          )

          // then
          expect(resource.pointer.out(ex.prop).term?.value).toEqual(term.value)
          expect(resource.pointer.out(ex.prop).term).toMatchObject({
            datatype: {
              value: term.datatype.value,
            },
          })
        })

        it(`initializes annotated term property from native ${name} value`, () => {
        // given
          interface Person extends RdfResourceCore {
            prop?: Literal
          }
          function PersonMixin<Base extends Constructor>(Resource: Base) {
            class PersonImpl extends Resource implements Person {
              @property({ path: ex.prop })
              prop?: Literal
            }

            return PersonImpl
          }
          PersonMixin.appliesTo = schema.Person
          const factory = new ResourceFactory(RdfResource)
          factory.addMixin(PersonMixin)

          // when
          const node = cf({ dataset: $rdf.dataset() }).blankNode()
          const resource = factory.createEntity(node, [PersonMixin], {
            initializer: {
              prop: value,
            },
          })

          // then
          expect(resource.pointer.out(ex.prop).term?.value).toEqual(term.value)
          expect(resource.pointer.out(ex.prop).term).toMatchObject({
            datatype: {
              value: term.datatype.value,
            },
          })
        })
      }
    })

    it('initializes nested resources using mixin property names', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Concept extends RdfResourceCore {
        prefLabel: string
      }
      function ConceptMixin<Base extends Constructor>(Resource: Base) {
        class ConceptImpl extends Resource implements Concept {
          @property.literal({ path: skos.prefLabel })
          prefLabel!: string;
        }

        return ConceptImpl
      }
      ConceptMixin.appliesTo = skos.Concept
      const factory = new ResourceFactory(RdfResource)
      factory.addMixin(ConceptMixin)

      // when
      const resource = factory.createEntity(node, [], {
        initializer: {
          [skos.hasTopConcept.value]: {
            types: [skos.Concept],
            prefLabel: 'Foo',
          },
        },
      })

      // then
      expect(resource.get<Concept>(skos.hasTopConcept)?.prefLabel).toEqual('Foo')
    })

    it('initialized mixed property as list when given array', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Concept extends RdfResourceCore {
        prefLabel: string | string[]
      }
      function ConceptMixin<Base extends Constructor>(Resource: Base) {
        class ConceptImpl extends Resource implements Concept {
          @property.literal({ path: skos.prefLabel, values: ['list', 'single'] })
          prefLabel!: string | string[];
        }

        return ConceptImpl
      }
      ConceptMixin.appliesTo = skos.Concept
      const factory = new ResourceFactory(RdfResource)
      factory.addMixin(ConceptMixin)

      // when
      const resource = factory.createEntity(node, [], {
        initializer: {
          prefLabel: ['Foo', 'Bar'],
        },
      })

      // then
      expect(resource.prefLabel).toEqual(['Foo', 'Bar'])
    })

    it('initialized list from resource initializers', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Shape extends RdfResourceCore {
        in: Term[]
      }
      function ShapeMixin<Base extends Constructor>(Resource: Base) {
        class ShapeImpl extends Resource implements Shape {
          @property({ path: sh.in, values: 'list' })
          in!: Term[];
        }

        return ShapeImpl
      }
      ShapeMixin.appliesTo = sh.Shape
      const factory = new ResourceFactory(RdfResource)
      factory.addMixin(ShapeMixin)

      // when
      const resource = factory.createEntity<Shape>(node, [], {
        initializer: {
          types: [sh.Shape],
          in: [{
            id: ex.foo,
          }, {
            id: ex.bar,
          }],
        },
      })

      // then
      expect(resource.in).toStrictEqual(
        expect.arrayContaining([ex.foo, ex.bar]),
      )
    })

    describe('with curried factory', () => {
      it('blank node initializing Term property', () => {
        // given
        const node = cf({ dataset: $rdf.dataset() }).blankNode()
        interface TestResource extends RdfResourceCore {
          child?: Term
        }
        function TestMixin<Base extends Constructor>(Resource: Base) {
          class Impl extends Resource implements TestResource {
            @property({ path: ex.child })
            child!: Term;
          }

          return Impl
        }
        TestMixin.shouldApply = true
        const factory = new ResourceFactory(RdfResource)
        factory.addMixin(TestMixin)

        // when
        const resource = factory.createEntity<TestResource>(node, [TestMixin], {
          initializer: {
            child: (graph) => factory.createEntity(graph.blankNode('foo')),
          },
        })

        // then
        expect(resource.child).toEqual($rdf.blankNode('foo'))
      })

      it('named node initializing URI property', () => {
        // given
        const node = cf({ dataset: $rdf.dataset() }).blankNode()
        const factory = new ResourceFactory(RdfResource)

        // when
        const resource = factory.createEntity(node, [], {
          initializer: {
            [ex.foo.value]: (graph: AnyPointer) => graph.namedNode('foo'),
          },
        })

        // then
        expect(resource.pointer.out(ex.foo).term).toEqual($rdf.namedNode('foo'))
      })
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
      const node = cf({ dataset: $rdf.dataset(), graph: ex.graph }).namedNode(
        ex.foo,
      )

      // when
      const res = new RdfResource(node)

      // then
      expect(res.isAnonymous).toBe(false)
    })
  })

  describe('getters', () => {
    let graph: AnyPointer

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

  describe('toJSON', () => {
    it("sets blank node id property as '@id'", () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode('john')
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.id).toEqual('_:john')
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "id": "_:john",
        }
      `)
    })

    it("sets named node id property as '@id'", () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).namedNode('foo')
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.id).toEqual('foo')
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "id": "foo",
        }
      `)
    })

    it("sets types as '@type'", () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .blankNode('john')
        .addOut(rdf.type, schema.Person)
        .addOut(rdf.type, foaf.Person)
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.type).toEqual(
        expect.arrayContaining([foaf.Person.value, schema.Person.value]),
      )
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "id": "_:john",
          "type": Array [
            "http://schema.org/Person",
            "http://xmlns.com/foaf/0.1/Person",
          ],
        }
      `)
    })

    it("set known string properties as json keys and adds them to '@context'", () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
        .addOut(schema.familyName, 'Doe')
      class TestResource extends RdfResource {
        @property.literal({ path: schema.givenName })
        name!: string;

        @property.literal({ path: schema.familyName })
        lastName!: string;
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.name).toEqual('John')
      expect(json['@context'].name).toEqual(schema.givenName.value)
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "lastName": "http://schema.org/familyName",
            "name": "http://schema.org/givenName",
            "type": "@type",
          },
          "id": "john",
          "lastName": "Doe",
          "name": "John",
        }
      `)
    })

    it('serializes property correctly when @namespace decorator is used', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
        .addOut(schema.familyName, 'Doe')
      @namespace(schema)
      class TestResource extends RdfResource {
        @property.literal()
        givenName!: string;

        @property.literal()
        familyName!: string;
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.givenName).toEqual('John')
      expect(json['@context'].givenName).toEqual(schema.givenName.value)
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "familyName": "http://schema.org/familyName",
            "givenName": "http://schema.org/givenName",
            "id": "@id",
            "type": "@type",
          },
          "familyName": "Doe",
          "givenName": "John",
          "id": "john",
        }
      `)
    })

    it('set extra literal properties as json values with full property URL', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
        .addOut(schema.familyName, 'Doe')
        .addOut(schema.age, 22)
        .addOut(schema.contentSize, 22.5)
        .addOut(
          schema.datePublished,
          literal(new Date().toISOString(), xsd.dateTime),
        )
        .addOut(schema.isLiveBroadcast, true)
        .addOut(schema.name, literal('foo', 'en'))
      class TestResource extends RdfResource {
        @property.literal({ path: schema.givenName })
        name!: string;
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(
        {
          [schema.datePublished.value]: {
            '@value': expect.any(String),
            '@type': xsd.dateTime.value,
          },
        },
        `
        Object {
          "@context": Object {
            "id": "@id",
            "name": "http://schema.org/givenName",
            "type": "@type",
          },
          "http://schema.org/age": 22,
          "http://schema.org/contentSize": 22.5,
          "http://schema.org/datePublished": Object {
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
            "@value": Any<String>,
          },
          "http://schema.org/familyName": "Doe",
          "http://schema.org/isLiveBroadcast": true,
          "http://schema.org/name": Object {
            "@language": "en",
            "@value": "foo",
          },
          "id": "john",
          "name": "John",
        }
      `,
      )
    })

    it('set extra literal properties with multiple values', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.name, literal('foo', 'en'))
        .addOut(schema.name, literal('bar', 'de'))
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://schema.org/name": Array [
            Object {
              "@language": "en",
              "@value": "foo",
            },
            Object {
              "@language": "de",
              "@value": "bar",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('set extra named node properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.knows, namedNode('jane'))
      node.namedNode('jane').addOut(schema.name, 'jane')
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://schema.org/knows": Object {
            "http://schema.org/name": "jane",
            "id": "jane",
          },
          "id": "john",
        }
      `)
    })

    it('set extra named node properties with multiple values', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.knows, namedNode('jane'))
        .addOut(schema.knows, namedNode('jenny'))
      node.namedNode('jane').addOut(schema.name, 'jane')
      node.namedNode('jenny').addOut(schema.name, 'jenny')
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://schema.org/knows": Array [
            Object {
              "http://schema.org/name": "jane",
              "id": "jane",
            },
            Object {
              "http://schema.org/name": "jenny",
              "id": "jenny",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('maps various literals', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('test')
        .addOut(schema.age, 22)
        .addOut(schema.contentSize, 22.5)
        .addOut(
          schema.datePublished,
          literal(new Date().toISOString(), xsd.dateTime),
        )
        .addOut(schema.isLiveBroadcast, true)
        .addOut(schema.isAccessibleForFree, false)
        .addOut(schema.contentUrl, 'http://example.com/foo')
        .addOut(schema.name, literal('foo', 'en'))
      class TestResource extends RdfResource {
        @property.literal({ path: schema.age, type: Number })
        age!: number;

        @property.literal({ path: schema.contentSize, type: Number })
        contentSize!: number;

        @property.literal({ path: schema.datePublished, type: Date })
        datePublished!: Date;

        @property.literal({ path: schema.isLiveBroadcast, type: Boolean })
        isLiveBroadcast!: boolean;

        @property.literal({ path: schema.isAccessibleForFree, type: Boolean })
        isAccessibleForFree!: boolean;

        @property.literal({ path: schema.contentUrl, datatype: xsd.anyURI })
        contentUrl!: string;

        @property.literal({ path: schema.name })
        name!: string;
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.age).toEqual(22)
      expect(json.contentSize).toEqual(22.5)
      expect(json.isLiveBroadcast).toEqual(true)
      expect(json.isAccessibleForFree).toEqual(false)
      expect(json.contentUrl).toEqual('http://example.com/foo')
      expect(json).toMatchInlineSnapshot(
        {
          datePublished: {
            '@value': expect.any(String),
            '@type': xsd.dateTime.value,
          },
        },
        `
        Object {
          "@context": Object {
            "age": "http://schema.org/age",
            "contentSize": "http://schema.org/contentSize",
            "contentUrl": "http://schema.org/contentUrl",
            "datePublished": "http://schema.org/datePublished",
            "id": "@id",
            "isAccessibleForFree": "http://schema.org/isAccessibleForFree",
            "isLiveBroadcast": "http://schema.org/isLiveBroadcast",
            "name": "http://schema.org/name",
            "type": "@type",
          },
          "age": 22,
          "contentSize": 22.5,
          "contentUrl": "http://example.com/foo",
          "datePublished": Object {
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
            "@value": Any<String>,
          },
          "id": "test",
          "isAccessibleForFree": false,
          "isLiveBroadcast": true,
          "name": Object {
            "@language": "en",
            "@value": "foo",
          },
        }
      `,
      )
    })

    it('serializes literal without datatype as xsd:string', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('test')
        .addOut(schema.name, {
          value: 'John Doe',
          termType: 'Literal',
          equals(other: Literal) {
            return other.equals(this)
          },
        } as Literal)
      class TestResource extends RdfResource {
        @property.literal({ path: schema.name })
        name!: string;
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json.name).toEqual('John Doe')
    })

    it('maps arrays of literals', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('test')
        .addOut(schema.alternateName, 'Foo')
        .addOut(schema.alternateName, literal('Bar', 'de'))
        .addOut(schema.alternateName, literal('Baz', 'fr'))
      class TestResource extends RdfResource {
        @property.literal({ path: schema.alternateName })
        alternateNames!: string[];
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.alternateNames).toHaveLength(3)
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "alternateNames": "http://schema.org/alternateName",
            "id": "@id",
            "type": "@type",
          },
          "alternateNames": Array [
            "Foo",
            Object {
              "@language": "de",
              "@value": "Bar",
            },
            Object {
              "@language": "fr",
              "@value": "Baz",
            },
          ],
          "id": "test",
        }
      `)
    })

    it('sets child resource as jsonified', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.knows, namedNode('jane'), jane => {
          jane.addOut(schema.givenName, 'Jane')
        })
      function PersonMixin<Base extends Constructor>(base: Base) {
        class TestPerson extends base {
          @property.literal({ path: schema.givenName })
          name!: string;

          @property.resource({ path: schema.knows, as: [PersonMixin] })
          knows!: TestPerson;
        }
        return TestPerson
      }
      const resource = new (PersonMixin(RdfResource))(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.knows?.name).toEqual('Jane')
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "knows": "http://schema.org/knows",
            "type": "@type",
          },
          "id": "john",
          "knows": Object {
            "@context": Object {
              "name": "http://schema.org/givenName",
            },
            "id": "jane",
            "name": "Jane",
          },
        }
      `)
    })

    it("only outputs '@id' of cycled resource", () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
        .addOut(schema.knows, namedNode('jane'), jane => {
          jane.addOut(schema.knows, namedNode('john'))
        })
      function PersonMixin<Base extends Constructor>(base: Base) {
        class TestPerson extends base {
          @property.resource({ path: schema.givenName, as: [PersonMixin] })
          name!: TestPerson;

          @property.resource({ path: schema.knows, as: [PersonMixin] })
          knows!: TestPerson;
        }
        return TestPerson
      }
      const resource = new (PersonMixin(RdfResource))(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.knows?.knows?.id).toEqual('john')
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "knows": "http://schema.org/knows",
            "name": "http://schema.org/givenName",
            "type": "@type",
          },
          "id": "john",
          "knows": Object {
            "id": "jane",
            "knows": Object {
              "id": "john",
            },
          },
          "name": "John",
        }
      `)
    })

    it('sets array of child resource as jsonified', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(
          schema.knows,
          [namedNode('jane'), namedNode('jenny')],
          friends => {
            friends.forEach(friend =>
              friend.addOut(schema.givenName, friend.value),
            )
          },
        )
      function PersonMixin<Base extends Constructor>(base: Base) {
        class TestPerson extends base {
          @property.literal({ path: schema.givenName })
          name!: string;

          @property.resource({
            path: schema.knows,
            as: [PersonMixin],
            values: 'array',
          })
          knows!: TestPerson[];
        }
        return TestPerson
      }
      const resource = new (PersonMixin(RdfResource))(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.knows![0].name).toEqual('jane')
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "knows": "http://schema.org/knows",
            "type": "@type",
          },
          "id": "john",
          "knows": Array [
            Object {
              "@context": Object {
                "name": "http://schema.org/givenName",
              },
              "id": "jane",
              "name": "jane",
            },
            Object {
              "@context": Object {
                "name": "http://schema.org/givenName",
              },
              "id": "jenny",
              "name": "jenny",
            },
          ],
        }
      `)
    })

    it('sets RDF list of child resource as jsonified array and adds appropriate context', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addList(schema.knows, [namedNode('jane'), namedNode('jenny')])
      node.namedNode('jane').addOut(schema.givenName, 'jane')
      node.namedNode('jenny').addOut(schema.givenName, 'jenny')
      function PersonMixin<Base extends Constructor>(base: Base) {
        class TestPerson extends base {
          @property.literal({ path: schema.givenName })
          name!: string;

          @property.resource({
            path: schema.knows,
            as: [PersonMixin],
            values: 'list',
          })
          knows!: TestPerson[];
        }
        return TestPerson
      }
      const resource = new (PersonMixin(RdfResource))(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json.knows![0].name).toEqual('jane')
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "knows": Object {
              "@container": "@list",
              "@id": "http://schema.org/knows",
            },
            "type": "@type",
          },
          "id": "john",
          "knows": Array [
            Object {
              "@context": Object {
                "name": "http://schema.org/givenName",
              },
              "id": "jane",
              "name": "jane",
            },
            Object {
              "@context": Object {
                "name": "http://schema.org/givenName",
              },
              "id": "jenny",
              "name": "jenny",
            },
          ],
        }
      `)
    })

    it('does not repeat same property in child resource context', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
        .addOut(schema.knows, namedNode('jane'), jane => {
          jane.addOut(schema.givenName, 'Jane')
        })
      function PersonMixin<Base extends Constructor>(base: Base) {
        class TestPerson extends base {
          @property.literal({ path: schema.givenName })
          name!: string;

          @property.resource({ path: schema.knows, as: [PersonMixin] })
          knows!: TestPerson;
        }
        return TestPerson
      }
      const resource = new (PersonMixin(RdfResource))(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "knows": "http://schema.org/knows",
            "name": "http://schema.org/givenName",
            "type": "@type",
          },
          "id": "john",
          "knows": Object {
            "id": "jane",
            "name": "Jane",
          },
          "name": "John",
        }
      `)
    })

    it('adds a child context property if it is mapped to a different predicate', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('article')
        .addOut(dcterms.title, 'Using alcaeus')
        .addOut(dcterms.creator, namedNode('john'), john => {
          john.addOut(schema.givenName, 'John')
        })
      function PersonMixin<Base extends Constructor>(base: Base) {
        class TestPerson extends base {
          @property.literal({ path: schema.givenName })
          name!: string;
        }
        return TestPerson
      }
      class TestResource extends RdfResource {
        @property({ path: dcterms.title })
        name!: string;

        @property.resource({ path: dcterms.creator, as: [PersonMixin] })
        creator!: RdfResource;
      }
      const resource = new TestResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "creator": "http://purl.org/dc/terms/creator",
            "id": "@id",
            "name": "http://purl.org/dc/terms/title",
            "type": "@type",
          },
          "creator": Object {
            "@context": Object {
              "name": "http://schema.org/givenName",
            },
            "id": "john",
            "name": "John",
          },
          "id": "article",
          "name": "Using alcaeus",
        }
      `)
    })

    it('ignore annotated properties with path not being a single predicate', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() })
        .namedNode('john')
        .addOut(schema.knows, namedNode('jane'), jane => {
          jane.addOut(schema.givenName, 'Jane')
        })
      class TestPerson extends RdfResource {
        @property.literal({ path: [schema.knows, schema.givenName] })
        friendsName!: string;

        @property.resource({ path: schema.knows, subjectFromAllGraphs: true })
        allFriendsFromAnywhere!: RdfResource;

        @property.resource({ path: crossBoundaries(schema.knows) })
        allFriends!: RdfResource;
      }
      const resource = new TestPerson(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://schema.org/knows": Object {
            "http://schema.org/givenName": "Jane",
            "id": "jane",
          },
          "id": "john",
        }
      `)
    })

    it('only serializes properties from same graph', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset, graph: $rdf.namedNode('john') })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
      cf({ dataset, graph: $rdf.namedNode('also-john') })
        .namedNode('john')
        .addOut(schema.givenName, 'Other name')
      class TestPerson extends RdfResource {
        @property.literal({ path: schema.givenName })
        name!: string;
      }
      const resource = new TestPerson(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "name": "http://schema.org/givenName",
            "type": "@type",
          },
          "id": "john",
          "name": "John",
        }
      `)
    })

    it('only serializes undecorated properties from same graph', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset, graph: $rdf.namedNode('john') })
        .namedNode('john')
        .addOut(schema.givenName, 'John')
      cf({ dataset, graph: $rdf.namedNode('also-john') })
        .namedNode('john')
        .addOut(schema.givenName, 'Other name')
      const resource = new RdfResource(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://schema.org/givenName": "John",
          "id": "john",
        }
      `)
    })

    it('uses property names for @namespace annotated mixin classes', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addOut(foaf.name, 'John')
        .addOut(schema.age, 48)
      function NameMixin<Base extends Constructor>(base: Base) {
        @namespace(foaf)
        class NameClass extends base {
          @property.literal()
          name!: string;
        }

        return NameClass
      }
      function AgeMixin<Base extends Constructor>(base: Base) {
        @namespace(schema)
        class AgeClass extends base {
          @property.literal()
          age!: number;
        }

        return AgeClass
      }
      const resource = RdfResource.factory.createEntity(node, [
        NameMixin,
        AgeMixin,
      ])

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "age": "http://schema.org/age",
            "id": "@id",
            "name": "http://xmlns.com/foaf/0.1/name",
            "type": "@type",
          },
          "age": 48,
          "id": "john",
          "name": "John",
        }
      `)
    })

    it('serialized resource term objects as child resources', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addOut(ex.foo, $rdf.blankNode('blank'))
        .addOut(ex.foo, $rdf.namedNode('bar'))
      function PersonMixin<Base extends Constructor>(base: Base) {
        @namespace(ex)
        class NameClass extends base {
          @property({ values: 'array' })
          foo!: Term[];
        }

        return NameClass
      }
      const resource = RdfResource.factory.createEntity(node, [PersonMixin])

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "foo": "http://example.com/foo",
            "id": "@id",
            "type": "@type",
          },
          "foo": Array [
            Object {
              "id": "_:blank",
            },
            Object {
              "id": "bar",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('serializes RDF list of literals', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addList(ex.foo, [
          'foo',
          $rdf.literal('bar', 'en'),
          $rdf.literal('bar', xsd.anyType),
        ])

      function PersonMixin<Base extends Constructor>(base: Base) {
        @namespace(ex)
        class NameClass extends base {
          @property.literal({ values: 'list' })
          foo!: string[];
        }

        return NameClass
      }

      const resource = RdfResource.factory.createEntity(node, [PersonMixin])

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "foo": Object {
              "@container": "@list",
              "@id": "http://example.com/foo",
            },
            "id": "@id",
            "type": "@type",
          },
          "foo": Array [
            "foo",
            Object {
              "@language": "en",
              "@value": "bar",
            },
            Object {
              "@type": "http://www.w3.org/2001/XMLSchema#anyType",
              "@value": "bar",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('serializes RDF list of literals (without mixin)', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addList(ex.foo, [
          'foo',
          $rdf.literal('bar', 'en'),
          $rdf.literal('bar', xsd.anyType),
        ])

      const resource = RdfResource.factory.createEntity(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://example.com/foo": Array [
            "foo",
            Object {
              "@language": "en",
              "@value": "bar",
            },
            Object {
              "@type": "http://www.w3.org/2001/XMLSchema#anyType",
              "@value": "bar",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('serializes RDF list of Named Nodes', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addList(ex.foo, [
          ex.Foo,
          ex.Bar,
          ex.Baz,
        ])

      function PersonMixin<Base extends Constructor>(base: Base) {
        @namespace(ex)
        class NameClass extends base {
          @property({ values: 'list' })
          foo!: Term[];
        }

        return NameClass
      }

      const resource = RdfResource.factory.createEntity(node, [PersonMixin])

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "foo": Object {
              "@container": "@list",
              "@id": "http://example.com/foo",
            },
            "id": "@id",
            "type": "@type",
          },
          "foo": Array [
            Object {
              "id": "http://example.com/Foo",
            },
            Object {
              "id": "http://example.com/Bar",
            },
            Object {
              "id": "http://example.com/Baz",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('serializes RDF list of resources which was not annotated', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addList(ex.foo, [
          ex.Foo,
          ex.Bar,
          ex.Baz,
        ])

      const resource = RdfResource.factory.createEntity(node)

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "id": "@id",
            "type": "@type",
          },
          "http://example.com/foo": Array [
            Object {
              "id": "http://example.com/Foo",
            },
            Object {
              "id": "http://example.com/Bar",
            },
            Object {
              "id": "http://example.com/Baz",
            },
          ],
          "id": "john",
        }
      `)
    })

    it('serializes literal property', () => {
      // given
      const dataset = $rdf.dataset()
      const node = cf({ dataset })
        .namedNode('john')
        .addList(ex.foo, [$rdf.literal('bar', 'en')])

      function PersonMixin<Base extends Constructor>(base: Base) {
        @namespace(ex)
        class NameClass extends base {
          @property.literal()
          foo!: string;
        }

        return NameClass
      }

      const resource = RdfResource.factory.createEntity(node, [PersonMixin])

      // when
      const json = resource.toJSON()

      // then
      expect(json).toBeValidJsonLd()
      expect(json).toMatchInlineSnapshot(`
        Object {
          "@context": Object {
            "foo": "http://example.com/foo",
            "id": "@id",
            "type": "@type",
          },
          "foo": Array [
            Object {
              "@language": "en",
              "@value": "bar",
            },
          ],
          "id": "john",
        }
      `)
    });

    [
      $rdf.variable('foo'),
      // $rdf.quad(ex.foo, ex.bar, ex.baz), TODO: for when dataset indexed supports RDF*
      $rdf.defaultGraph(),
    ].forEach((node: Term) => {
      it(`serializes ${node.termType} value as 'null'`, () => {
        // given
        const dataset = $rdf.dataset()
        const person = cf({ dataset })
          .namedNode('john')
        function PersonMixin<Base extends Constructor>(base: Base) {
          @namespace(ex)
          class NameClass extends base {
            @property({ initial: node })
            foo!: Term;
          }

          return NameClass
        }
        const resource = RdfResource.factory.createEntity(person, [PersonMixin])

        // when
        const json = resource.toJSON()

        // then
        expect(json).toBeValidJsonLd()
        expect(json.foo).toBeNull()
      })
    })
  })
})
