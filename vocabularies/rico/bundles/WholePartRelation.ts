import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';
import { WholePartRelationMixin } from '../lib/WholePartRelation';

export const WholePartRelationBundle = [
  RelationMixin as Mixin,
  ThingMixin as Mixin,
  WholePartRelationMixin as Mixin];
