import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation.js';
import { AppellationRelationMixin } from '../lib/AppellationRelation.js';
import { ConceptMixin } from '../lib/Concept.js';
import { DateMixin } from '../lib/Date.js';
import { ThingMixin } from '../lib/Thing.js';

export const AppellationBundle = [
  AppellationMixin as Mixin,
  AppellationRelationMixin as Mixin,
  ConceptMixin as Mixin,
  DateMixin as Mixin,
  ThingMixin as Mixin];
