import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { PlaceRelationMixin } from '../lib/PlaceRelation';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';

export const PlaceRelationBundle = [
  PlaceMixin as Mixin,
  PlaceRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
