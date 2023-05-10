import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation.js';
import { CreationRelationMixin } from '../lib/CreationRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';
import { RecordMixin } from '../lib/Record.js';

export const AuthorshipRelationBundle = [
  AuthorshipRelationMixin as Mixin,
  CreationRelationMixin as Mixin,
  GroupMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  RecordMixin as Mixin];
