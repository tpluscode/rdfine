import clownface from 'clownface'
import $rdf from '@rdfjs/dataset'
import RDF from '@rdfjs/data-model'
import { fromPointer } from '../lib/IriTemplate'
import { hydra } from '../lib/namespace';
import namespace from '@rdfjs/namespace'
import { xsd } from '@tpluscode/rdf-ns-builders';
import RdfResource from '@tpluscode/rdfine';
import { IriTemplateBundle } from '../bundles';

RdfResource.factory.addMixin(...IriTemplateBundle)

const ex = namespace('http://example.com/')

describe('IriTemplate', () => {
  describe('expand', () => {
    const basic = hydra.BasicRepresentation.value
    const explicit = hydra.ExplicitRepresentation.value

    test.each`
      type                   | representation | term                                         | expected
      ${'IRI'}               | ${basic}       | ${RDF.namedNode('http://www.hydra-cg.com/')} | ${'http://example.com/find/http%3A%2F%2Fwww.hydra-cg.com%2F'}
      ${'IRI'}               | ${explicit}    | ${RDF.namedNode('http://www.hydra-cg.com/')} | ${'http://example.com/find/http%3A%2F%2Fwww.hydra-cg.com%2F'}
      ${'string'}            | ${basic}       | ${RDF.literal('A simple string')}            | ${'http://example.com/find/A%20simple%20string'}
      ${'string'}            | ${explicit}    | ${RDF.literal('A simple string')}            | ${'http://example.com/find/%22A%20simple%20string%22'}
      ${'string with quote'} | ${basic}       | ${RDF.literal('A string " with a quote')}    | ${'http://example.com/find/A%20string%20%22%20with%20a%20quote'}
      ${'string with quote'} | ${explicit}    | ${RDF.literal('A string " with a quote')}    | ${'http://example.com/find/%22A%20string%20%22%20with%20a%20quote%22'}
      ${'tagged string'}     | ${basic}       | ${RDF.literal('A simple string', 'en')}      | ${'http://example.com/find/A%20simple%20string'}
      ${'tagged string'}     | ${explicit}    | ${RDF.literal('A simple string', 'en')}      | ${'http://example.com/find/%22A%20simple%20string%22%40en'}
      ${'typed literal'}     | ${basic}       | ${RDF.literal('5.5', xsd.decimal)}           | ${'http://example.com/find/5.5'}
      ${'typed literal'}     | ${explicit}    | ${RDF.literal('5.5', xsd.decimal)}           | ${'http://example.com/find/%225.5%22%5E%5Ehttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23decimal'}
    `('should correctly represent $type with $representation', ({ representation, term, expected }) => {
      // given
      const dataset = $rdf.dataset()
      const pointer = clownface({ dataset }).blankNode()
      const iriTemplate = fromPointer(pointer, {
        template: 'http://example.com/find/{value}',
        variableRepresentation: RDF.namedNode(representation),
        mapping: [
          {
            types: [hydra.IriTemplateMapping],
            variable: 'value',
            property: ex.value,
          },
        ],
      })

      // when
      const bindings = clownface({ dataset })
        .blankNode()
        .addOut(ex.value, term)
      const expanded = iriTemplate.expand(bindings)

      // then
      expect(expanded).toEqual(expected)
    })

    it('does not expand variables with no values', () => {
      // given
      const dataset = $rdf.dataset()
      const pointer = clownface({ dataset }).blankNode()
      const iriTemplate = fromPointer(pointer, {
        template: 'http://example.com/find/{?foo,bar,baz}',
        mapping: [
          {
            types: [hydra.IriTemplateMapping],
            variable: 'foo',
            property: ex.foo,
          },
          {
            types: [hydra.IriTemplateMapping],
            variable: 'bar',
            property: ex.bar,
          },
          {
            types: [hydra.IriTemplateMapping],
            variable: 'baz',
            property: ex.baz,
          },
        ],
      })

      // when
      const bindings = clownface({ dataset })
        .blankNode()
        .addOut(ex.bar, RDF.literal('bar'))
      const expanded = iriTemplate.expand(bindings)

      // then
      expect(expanded).toEqual('http://example.com/find/?bar=bar')
    })

    it('combines multiple models to expand template', () => {
      // given
      const dataset = $rdf.dataset()
      const pointer = clownface({ dataset }).blankNode()
      const iriTemplate = fromPointer(pointer, {
        template: 'http://example.com/find/{?foo,bar,baz}',
        mapping: [
          {
            types: [hydra.IriTemplateMapping],
            variable: 'foo',
            property: ex.foo,
          },
          {
            types: [hydra.IriTemplateMapping],
            variable: 'bar',
            property: ex.bar,
          },
          {
            types: [hydra.IriTemplateMapping],
            variable: 'baz',
            property: ex.baz,
          },
        ],
      })

      // when
      const foo = clownface({ dataset }).blankNode().addOut(ex.foo, RDF.literal('foo'))
      const bar = clownface({ dataset }).blankNode().addOut(ex.bar, RDF.literal('bar'))
      const baz = clownface({ dataset }).blankNode().addOut(ex.baz, RDF.literal('baz'))
      const expanded = iriTemplate.expand(foo, bar, baz)

      // then
      expect(expanded).toEqual('http://example.com/find/?foo=foo&bar=bar&baz=baz')
    })

    it('uses latter models to override template bindings', () => {
      // given
      const dataset = $rdf.dataset()
      const pointer = clownface({ dataset }).blankNode()
      const iriTemplate = fromPointer(pointer, {
        template: 'http://example.com/find/{?foo}',
        mapping: [
          {
            types: [hydra.IriTemplateMapping],
            variable: 'foo',
            property: ex.foo,
          },
        ],
      })

      // when
      const foo = clownface({ dataset }).blankNode().addOut(ex.foo, RDF.literal('foo'))
      const bar = clownface({ dataset }).blankNode().addOut(ex.foo, RDF.literal('bar'))
      const expanded = iriTemplate.expand(foo, bar)

      // then
      expect(expanded).toEqual('http://example.com/find/?foo=bar')
    })

    it('expands against base if given as first argument', () => {
      // given
      const dataset = $rdf.dataset()
      const pointer = clownface({ dataset }).blankNode()
      const iriTemplate = fromPointer(pointer, {
        template: '{?foo}',
        mapping: [
          {
            types: [hydra.IriTemplateMapping],
            variable: 'foo',
            property: ex.foo,
          },
        ],
      })

      // when
      const foo = clownface({ dataset }).blankNode().addOut(ex.foo, RDF.literal('foo'))
      const bar = clownface({ dataset }).blankNode().addOut(ex.foo, RDF.literal('bar'))
      const expanded = iriTemplate.expand('http://example.com/find/', foo, bar)

      // then
      expect(expanded).toEqual('http://example.com/find/?foo=bar')
    })
  })
})
