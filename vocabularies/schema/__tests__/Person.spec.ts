import PersonMixin from '../Person';
import { RdfResourceImpl } from '@tpluscode/rdfine';

class Person extends PersonMixin(RdfResourceImpl) {}

describe('Person', () => {
  describe('givenName', () => {
    it('should be a property', () => {
      expect('givenName' in Person.prototype).toBeTruthy();
    });
  });
});
