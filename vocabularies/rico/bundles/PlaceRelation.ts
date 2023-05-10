import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place.js';
import { PlaceRelationMixin } from '../lib/PlaceRelation.js';
import { RelationMixin } from '../lib/Relation.js';
import { ThingMixin } from '../lib/Thing.js';

export const PlaceRelationBundle = [
  PlaceMixin as Mixin,
  PlaceRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
