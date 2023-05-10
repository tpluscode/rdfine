import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DateMixin } from '../lib/Date.js';
import { DateRangeMixin } from '../lib/DateRange.js';

export const DateRangeBundle = [
  DateMixin as Mixin,
  DateRangeMixin as Mixin];
