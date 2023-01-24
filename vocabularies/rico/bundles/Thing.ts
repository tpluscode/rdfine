import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AppellationMixin } from '../lib/Appellation';
import { AppellationRelationMixin } from '../lib/AppellationRelation';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';
import { DateMixin } from '../lib/Date';
import { EventMixin } from '../lib/Event';
import { EventRelationMixin } from '../lib/EventRelation';
import { GroupMixin } from '../lib/Group';
import { IdentifierMixin } from '../lib/Identifier';
import { NameMixin } from '../lib/Name';
import { OwnershipRelationMixin } from '../lib/OwnershipRelation';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PlaceRelationMixin } from '../lib/PlaceRelation';
import { PositionMixin } from '../lib/Position';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RelationMixin } from '../lib/Relation';
import { RuleMixin } from '../lib/Rule';
import { RuleRelationMixin } from '../lib/RuleRelation';
import { SequentialRelationMixin } from '../lib/SequentialRelation';
import { TemporalRelationMixin } from '../lib/TemporalRelation';
import { ThingMixin } from '../lib/Thing';
import { TypeMixin } from '../lib/Type';
import { TypeRelationMixin } from '../lib/TypeRelation';
import { WholePartRelationMixin } from '../lib/WholePartRelation';

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
