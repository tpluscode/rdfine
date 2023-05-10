import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation.js';
import { LeadershipRelationMixin } from '../lib/LeadershipRelation.js';
import { MembershipRelationMixin } from '../lib/MembershipRelation.js';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionHoldingRelationMixin } from '../lib/PositionHoldingRelation.js';
import { PositionMixin } from '../lib/Position.js';
import { PositionToGroupRelationMixin } from '../lib/PositionToGroupRelation.js';
import { RecordMixin } from '../lib/Record.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { ThingMixin } from '../lib/Thing.js';

export const PositionBundle = [
  AgentMixin as Mixin,
  AuthorshipRelationMixin as Mixin,
  GroupMixin as Mixin,
  InstantiationMixin as Mixin,
  IntellectualPropertyRightsRelationMixin as Mixin,
  LeadershipRelationMixin as Mixin,
  MembershipRelationMixin as Mixin,
  OwnershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionHoldingRelationMixin as Mixin,
  PositionMixin as Mixin,
  PositionToGroupRelationMixin as Mixin,
  RecordMixin as Mixin,
  RecordResourceMixin as Mixin,
  ThingMixin as Mixin];
