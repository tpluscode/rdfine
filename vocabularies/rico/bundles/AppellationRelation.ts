import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation.js';
import { AppellationRelationMixin } from '../lib/AppellationRelation.js';
import { RelationMixin } from '../lib/Relation.js';
import { ThingMixin } from '../lib/Thing.js';

export const AppellationRelationBundle = [
  AppellationMixin as Mixin,
  AppellationRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
