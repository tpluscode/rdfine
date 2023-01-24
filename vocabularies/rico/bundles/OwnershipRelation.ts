import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';
import { GroupMixin } from '../lib/Group';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';
import { ThingMixin } from '../lib/Thing';

export const OwnershipRelationBundle = [
  AuthorityRelationMixin as Mixin,
  GroupMixin as Mixin,
  OwnershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  ThingMixin as Mixin];
