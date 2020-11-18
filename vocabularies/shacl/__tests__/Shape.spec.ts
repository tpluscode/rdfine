import clownface from 'clownface'
import $rdf from '@rdfjs/dataset'
import RDF from '@rdfjs/data-model'
import RdfResource, { Constructor } from '@tpluscode/rdfine'
import { rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import { ResourceMixin } from '@rdfine/rdfs/lib/Resource'
import { ShapeMixin } from '../lib/Shape';
import { ShapeBundle } from '../bundles'
import { sh } from '../lib/namespace'
import { PropertyShapeMixin } from '../lib/PropertyShape'

RdfResource.factory.addMixin(...ShapeBundle)
RdfResource.factory.addMixin(ResourceMixin)

describe('Shape', () => {
  describe('property', () => {
    it('should return instances of shape', async () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })
        .addOut(sh.property, property => {
          property.addOut(sh.name, 'Foo')
        })

      // when
      const shape = new ShapeMixin.Class(graph)

      // then
      expect(shape.property[0].name).toEqual('Foo')
    })
  })

  describe('__mixins', () => {
    it('does not contain duplicate mixins', () => {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })
        .addOut(rdf.type, [rdfs.Resource, sh.PropertyShape])

      // when
      const shape = RdfResource.factory.createEntity(graph)
      const propType = shape.constructor as Constructor

      // then
      expect(propType.__mixins).toEqual(
        expect.arrayContaining([PropertyShapeMixin, ResourceMixin]),
      )
    })
  })
})
