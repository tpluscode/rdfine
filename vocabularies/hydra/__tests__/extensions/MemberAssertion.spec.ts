import { fromPointer, MemberAssertion } from '../../extensions/MemberAssertion';
import clownface from 'clownface';
import $rdf from 'rdf-ext';
import { Initializer } from '@tpluscode/rdfine/RdfResource';
import { schema, hydra } from '@tpluscode/rdf-ns-builders';

describe('@rdfine/hydra/extensions/MemberAssertion', () => {
  describe('fromPointer', () => {
    it('creates from initializer', () => {
      // given
      const pointer = clownface({ dataset: $rdf.dataset() }).blankNode()
      const init: Initializer<MemberAssertion> = {
        subject: $rdf.namedNode('foo'),
        property: schema.knows,
        object: $rdf.namedNode('bar'),
      }

      // when
      fromPointer(pointer, init)

      // then
      expect(pointer.out(hydra.subject).term).toStrictEqual($rdf.namedNode('foo'))
      expect(pointer.out(hydra.property).term).toStrictEqual(schema.knows)
      expect(pointer.out(hydra.object).term).toStrictEqual($rdf.namedNode('bar'))
    })
  })
})
