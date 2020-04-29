import clownface from 'clownface'
import rdf from '@rdfjs/dataset'
import RDF from '@rdfjs/data-model'
import { ShapeMixin } from '../Shape';
import { ShapeDependencies } from '../dependencies/Shape'
import { sh } from '../lib/namespace';
import RdfResource from '@tpluscode/rdfine';

describe('Shape', () => {
  describe('property', () => {
    it('should return instances of shape', async () => {
      // given
      const dataset = rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })
        .addOut(sh.property, property => {
          property.addOut(sh.name, 'Foo')
        })
      RdfResource.factory.addMixin(...ShapeDependencies)

      // when
      const shape = new ShapeMixin.Class(graph)

      // then
      expect(shape.property[0].name).toEqual(RDF.literal('Foo'))
    })
  })
})
