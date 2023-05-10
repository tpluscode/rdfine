import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';
import { ThingMixin } from '../lib/Thing.js';

export const OwnershipRelationBundle = [
  AuthorityRelationMixin as Mixin,
  GroupMixin as Mixin,
  OwnershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  ThingMixin as Mixin];
