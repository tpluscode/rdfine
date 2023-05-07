import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FamilyRelationMixin } from '../lib/FamilyRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { SpouseRelationMixin } from '../lib/SpouseRelation.js';

export const SpouseRelationBundle = [
  FamilyRelationMixin as Mixin,
  PersonMixin as Mixin,
  SpouseRelationMixin as Mixin];
