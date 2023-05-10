import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation.js';
import { ChildRelationMixin } from '../lib/ChildRelation.js';
import { CorrespondenceRelationMixin } from '../lib/CorrespondenceRelation.js';
import { DateMixin } from '../lib/Date.js';
import { DemographicGroupMixin } from '../lib/DemographicGroup.js';
import { DescendanceRelationMixin } from '../lib/DescendanceRelation.js';
import { FamilyRelationMixin } from '../lib/FamilyRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation.js';
import { KnowingOfRelationMixin } from '../lib/KnowingOfRelation.js';
import { KnowingRelationMixin } from '../lib/KnowingRelation.js';
import { LeadershipRelationMixin } from '../lib/LeadershipRelation.js';
import { MembershipRelationMixin } from '../lib/MembershipRelation.js';
import { OccupationTypeMixin } from '../lib/OccupationType.js';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionHoldingRelationMixin } from '../lib/PositionHoldingRelation.js';
import { PositionMixin } from '../lib/Position.js';
import { RecordMixin } from '../lib/Record.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { SiblingRelationMixin } from '../lib/SiblingRelation.js';
import { SpouseRelationMixin } from '../lib/SpouseRelation.js';
import { TeachingRelationMixin } from '../lib/TeachingRelation.js';
import { ThingMixin } from '../lib/Thing.js';

export const PersonBundle = [
  AgentMixin as Mixin,
  AuthorshipRelationMixin as Mixin,
  ChildRelationMixin as Mixin,
  CorrespondenceRelationMixin as Mixin,
  DateMixin as Mixin,
  DemographicGroupMixin as Mixin,
  DescendanceRelationMixin as Mixin,
  FamilyRelationMixin as Mixin,
  GroupMixin as Mixin,
  InstantiationMixin as Mixin,
  IntellectualPropertyRightsRelationMixin as Mixin,
  KnowingOfRelationMixin as Mixin,
  KnowingRelationMixin as Mixin,
  LeadershipRelationMixin as Mixin,
  MembershipRelationMixin as Mixin,
  OccupationTypeMixin as Mixin,
  OwnershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionHoldingRelationMixin as Mixin,
  PositionMixin as Mixin,
  RecordMixin as Mixin,
  RecordResourceMixin as Mixin,
  SiblingRelationMixin as Mixin,
  SpouseRelationMixin as Mixin,
  TeachingRelationMixin as Mixin,
  ThingMixin as Mixin];
