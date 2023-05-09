import clownface from 'clownface'
import $rdf from 'rdf-ext'
import RDF from '@rdfjs/data-model'
import RdfResource from '@tpluscode/rdfine'
import { rdfs, skos } from '@tpluscode/rdf-ns-builders'
import { ResourceMixin } from '@rdfine/rdfs/lib/Resource'
import { PropertyShape, fromPointer } from '../lib/PropertyShape.js';
import { PropertyShapeBundle } from '../bundles/index.js'
import chai, { expect } from 'chai';
import { jestSnapshotPlugin } from 'mocha-chai-jest-snapshot';

RdfResource.factory.addMixin(...PropertyShapeBundle)
RdfResource.factory.addMixin(ResourceMixin)

describe('PropertyShape', () => {
  chai.use(jestSnapshotPlugin())

  describe('initializer', () => {
    it('lets initializing path with named node', () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })

      // when
      fromPointer(graph, {
        path: rdfs.label,
      })

      // then
      expect(dataset.toCanonical()).toMatchSnapshot()
    })

    it('lets initializing path with named node array', () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })

      // when
      fromPointer(graph, {
        path: [skos.broader, rdfs.label],
      })

      // then
      expect(dataset.toCanonical()).toMatchSnapshot()
    })

    it('initializes a single path property without an RDF List', () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })

      // when
      const shape = fromPointer(graph, {
        path: rdfs.label,
      })

      // then
      expect(shape).toMatchSnapshot()
    })

    it('initializes a single element array as an RDF List', () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })

      // when
      const shape = fromPointer(graph, {
        path: [rdfs.label],
      })

      // then
      expect(shape).toMatchSnapshot()
    })
  })
})
