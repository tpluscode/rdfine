import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FamilyRelationMixin } from '../lib/FamilyRelation';
import { PersonMixin } from '../lib/Person';
import { SpouseRelationMixin } from '../lib/SpouseRelation';

export const SpouseRelationBundle = [
  FamilyRelationMixin as Mixin,
  PersonMixin as Mixin,
  SpouseRelationMixin as Mixin];
