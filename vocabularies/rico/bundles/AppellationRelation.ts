import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation';
import { AppellationRelationMixin } from '../lib/AppellationRelation';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';

export const AppellationRelationBundle = [
  AppellationMixin as Mixin,
  AppellationRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
