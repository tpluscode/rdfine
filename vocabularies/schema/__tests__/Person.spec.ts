import { PersonMixin } from '../lib/Person';
import RdfResource from '@tpluscode/rdfine';

class Person extends PersonMixin(RdfResource) {}

describe('Person', () => {
  describe('givenName', () => {
    it('should be a property', () => {
      expect('givenName' in Person.prototype).toBeTruthy();
    });
  });
});
