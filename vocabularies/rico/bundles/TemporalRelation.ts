import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SequentialRelationMixin } from '../lib/SequentialRelation';
import { TemporalRelationMixin } from '../lib/TemporalRelation';
import { ThingMixin } from '../lib/Thing';

export const TemporalRelationBundle = [
  SequentialRelationMixin as Mixin,
  TemporalRelationMixin as Mixin,
  ThingMixin as Mixin];
