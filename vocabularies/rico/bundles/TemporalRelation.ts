import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SequentialRelationMixin } from '../lib/SequentialRelation.js';
import { TemporalRelationMixin } from '../lib/TemporalRelation.js';
import { ThingMixin } from '../lib/Thing.js';

export const TemporalRelationBundle = [
  SequentialRelationMixin as Mixin,
  TemporalRelationMixin as Mixin,
  ThingMixin as Mixin];
