import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';

export const IntellectualPropertyRightsRelationBundle = [
  AuthorityRelationMixin as Mixin,
  GroupMixin as Mixin,
  InstantiationMixin as Mixin,
  IntellectualPropertyRightsRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  RecordResourceMixin as Mixin];
