import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation';
import { CreationRelationMixin } from '../lib/CreationRelation';
import { GroupMixin } from '../lib/Group';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';
import { RecordMixin } from '../lib/Record';

export const AuthorshipRelationBundle = [
  AuthorshipRelationMixin as Mixin,
  CreationRelationMixin as Mixin,
  GroupMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  RecordMixin as Mixin];
