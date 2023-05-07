import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation.js';
import { DateMixin } from '../lib/Date.js';
import { PersonMixin } from '../lib/Person.js';
import { ThingMixin } from '../lib/Thing.js';

export const DateBundle = [
  AppellationMixin as Mixin,
  DateMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin];
