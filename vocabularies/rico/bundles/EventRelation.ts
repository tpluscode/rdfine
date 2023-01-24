import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { EventRelationMixin } from '../lib/EventRelation';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';

export const EventRelationBundle = [
  EventMixin as Mixin,
  EventRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
