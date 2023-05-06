import $rdf from 'rdf-ext';
import clownface from 'clownface';
import RDF from '@rdfjs/data-model';
import { fromPointer, NodeShapeMixin } from '../lib/NodeShape.js';
import { ex } from '@tpluscode/rdfine/__tests__/_helpers';
import RdfResourceImpl from '@tpluscode/rdfine';
import { PropertyShapeMixin } from '../lib/PropertyShape.js';
import { rdfs } from '@tpluscode/rdf-ns-builders';
import {expect} from "chai";

RdfResourceImpl.factory.addMixin(NodeShapeMixin)
RdfResourceImpl.factory.addMixin(PropertyShapeMixin)

describe('NodeShape', () => {
  describe('initializer', () => {
    it('sets an array as list deep in the initialized graph',  function () {
      // given
      const dataset = $rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/shape') })

      // when
      fromPointer(graph, {
        property: {
          node: {
            property: [{
              in: [{
                id: ex.foo,
                [rdfs.label.value]: 'Foo',
              }, {
                id: ex.bar,
                [rdfs.label.value]: 'Bar',
              }],
            }],
          },
        },
      })

      // then
      expect(dataset.toCanonical()).to.matchSnapshot(this)
    })
  })
})
