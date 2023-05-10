import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AppellationMixin } from '../lib/Appellation.js';
import { AppellationRelationMixin } from '../lib/AppellationRelation.js';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';
import { DateMixin } from '../lib/Date.js';
import { EventMixin } from '../lib/Event.js';
import { EventRelationMixin } from '../lib/EventRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { IdentifierMixin } from '../lib/Identifier.js';
import { NameMixin } from '../lib/Name.js';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PlaceMixin } from '../lib/Place.js';
import { PlaceRelationMixin } from '../lib/PlaceRelation.js';
import { PositionMixin } from '../lib/Position.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RelationMixin } from '../lib/Relation.js';
import { RuleMixin } from '../lib/Rule.js';
import { RuleRelationMixin } from '../lib/RuleRelation.js';
import { SequentialRelationMixin } from '../lib/SequentialRelation.js';
import { TemporalRelationMixin } from '../lib/TemporalRelation.js';
import { ThingMixin } from '../lib/Thing.js';
import { TypeMixin } from '../lib/Type.js';
import { TypeRelationMixin } from '../lib/TypeRelation.js';
import { WholePartRelationMixin } from '../lib/WholePartRelation.js';

export const ThingBundle = [
  AgentMixin as Mixin,
  AppellationMixin as Mixin,
  AppellationRelationMixin as Mixin,
  AuthorityRelationMixin as Mixin,
  DateMixin as Mixin,
  EventMixin as Mixin,
  EventRelationMixin as Mixin,
  GroupMixin as Mixin,
  IdentifierMixin as Mixin,
  NameMixin as Mixin,
  OwnershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PlaceRelationMixin as Mixin,
  PositionMixin as Mixin,
  RecordResourceMixin as Mixin,
  RelationMixin as Mixin,
  RuleMixin as Mixin,
  RuleRelationMixin as Mixin,
  SequentialRelationMixin as Mixin,
  TemporalRelationMixin as Mixin,
  ThingMixin as Mixin,
  TypeMixin as Mixin,
  TypeRelationMixin as Mixin,
  WholePartRelationMixin as Mixin];
