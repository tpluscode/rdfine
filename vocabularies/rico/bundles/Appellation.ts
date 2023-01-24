import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation';
import { AppellationRelationMixin } from '../lib/AppellationRelation';
import { ConceptMixin } from '../lib/Concept';
import { DateMixin } from '../lib/Date';
import { ThingMixin } from '../lib/Thing';

export const AppellationBundle = [
  AppellationMixin as Mixin,
  AppellationRelationMixin as Mixin,
  ConceptMixin as Mixin,
  DateMixin as Mixin,
  ThingMixin as Mixin];
