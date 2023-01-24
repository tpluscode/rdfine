import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';
import { GroupMixin } from '../lib/Group';
import { InstantiationMixin } from '../lib/Instantiation';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';
import { RecordResourceMixin } from '../lib/RecordResource';

export const IntellectualPropertyRightsRelationBundle = [
  AuthorityRelationMixin as Mixin,
  GroupMixin as Mixin,
  InstantiationMixin as Mixin,
  IntellectualPropertyRightsRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  RecordResourceMixin as Mixin];
