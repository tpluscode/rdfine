import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';

export const RelationBundle = [
  AgentMixin as Mixin,
  RecordResourceMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
