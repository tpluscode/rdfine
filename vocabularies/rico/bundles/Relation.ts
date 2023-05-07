import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RelationMixin } from '../lib/Relation.js';
import { ThingMixin } from '../lib/Thing.js';

export const RelationBundle = [
  AgentMixin as Mixin,
  RecordResourceMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
