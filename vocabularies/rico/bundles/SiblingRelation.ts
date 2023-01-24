import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FamilyRelationMixin } from '../lib/FamilyRelation';
import { PersonMixin } from '../lib/Person';
import { SiblingRelationMixin } from '../lib/SiblingRelation';

export const SiblingRelationBundle = [
  FamilyRelationMixin as Mixin,
  PersonMixin as Mixin,
  SiblingRelationMixin as Mixin];
