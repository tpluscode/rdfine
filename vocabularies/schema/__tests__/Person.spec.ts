import { PersonMixin } from '../lib/Person.js';
import RdfResource from '@tpluscode/rdfine';
import {expect} from "chai";

class Person extends PersonMixin(RdfResource) {}

describe('Person', () => {
  describe('givenName', () => {
    it('should be a property', () => {
      expect('givenName' in Person.prototype).to.be.ok
    });
  });
});
