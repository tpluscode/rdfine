import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation';
import { ChildRelationMixin } from '../lib/ChildRelation';
import { CorrespondenceRelationMixin } from '../lib/CorrespondenceRelation';
import { DateMixin } from '../lib/Date';
import { DemographicGroupMixin } from '../lib/DemographicGroup';
import { DescendanceRelationMixin } from '../lib/DescendanceRelation';
import { FamilyRelationMixin } from '../lib/FamilyRelation';
import { GroupMixin } from '../lib/Group';
import { InstantiationMixin } from '../lib/Instantiation';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation';
import { KnowingOfRelationMixin } from '../lib/KnowingOfRelation';
import { KnowingRelationMixin } from '../lib/KnowingRelation';
import { LeadershipRelationMixin } from '../lib/LeadershipRelation';
import { MembershipRelationMixin } from '../lib/MembershipRelation';
import { OccupationTypeMixin } from '../lib/OccupationType';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation';
import { PersonMixin } from '../lib/Person';
import { PositionHoldingRelationMixin } from '../lib/PositionHoldingRelation';
import { PositionMixin } from '../lib/Position';
import { RecordMixin } from '../lib/Record';
import { RecordResourceMixin } from '../lib/RecordResource';
import { SiblingRelationMixin } from '../lib/SiblingRelation';
import { SpouseRelationMixin } from '../lib/SpouseRelation';
import { TeachingRelationMixin } from '../lib/TeachingRelation';
import { ThingMixin } from '../lib/Thing';

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
