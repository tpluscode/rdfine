import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event.js';
import { EventRelationMixin } from '../lib/EventRelation.js';
import { RelationMixin } from '../lib/Relation.js';
import { ThingMixin } from '../lib/Thing.js';

export const EventRelationBundle = [
  EventMixin as Mixin,
  EventRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
