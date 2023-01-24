import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RelationMixin } from '../lib/Relation';
import { SequentialRelationMixin } from '../lib/SequentialRelation';
import { ThingMixin } from '../lib/Thing';

export const SequentialRelationBundle = [
  RelationMixin as Mixin,
  SequentialRelationMixin as Mixin,
  ThingMixin as Mixin];
