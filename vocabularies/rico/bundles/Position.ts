import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation';
import { GroupMixin } from '../lib/Group';
import { InstantiationMixin } from '../lib/Instantiation';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation';
import { LeadershipRelationMixin } from '../lib/LeadershipRelation';
import { MembershipRelationMixin } from '../lib/MembershipRelation';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation';
import { PersonMixin } from '../lib/Person';
import { PositionHoldingRelationMixin } from '../lib/PositionHoldingRelation';
import { PositionMixin } from '../lib/Position';
import { PositionToGroupRelationMixin } from '../lib/PositionToGroupRelation';
import { RecordMixin } from '../lib/Record';
import { RecordResourceMixin } from '../lib/RecordResource';
import { ThingMixin } from '../lib/Thing';

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
