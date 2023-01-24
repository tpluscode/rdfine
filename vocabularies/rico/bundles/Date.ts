import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation';
import { DateMixin } from '../lib/Date';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';

export const DateBundle = [
  AppellationMixin as Mixin,
  DateMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin];
