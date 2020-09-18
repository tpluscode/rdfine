import clownface from 'clownface'
import $rdf from 'rdf-ext'
import RDF from '@rdfjs/data-model'
import RdfResource from '@tpluscode/rdfine'
import { rdfs, skos } from '@tpluscode/rdf-ns-builders'
import { ResourceMixin } from '@rdfine/rdfs/Resource'
import { PropertyShape, PropertyShapeMixin } from '../PropertyShape';
import { PropertyShapeBundle } from '../bundles'

RdfResource.factory.addMixin(...PropertyShapeBundle)
RdfResource.factory.addMixin(ResourceMixin)

describe('PropertyShape', () => {
  describe('initializer', () => {
    it('lets initializing path with named node', () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })

      // when
      // eslint-disable-next-line no-new
      new PropertyShapeMixin.Class(graph, {
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
      // eslint-disable-next-line no-new
      new PropertyShapeMixin.Class(graph, {
        path: [skos.broader, rdfs.label],
      })

      // then
      expect(dataset.toCanonical()).toMatchSnapshot()
    })
  })
})
