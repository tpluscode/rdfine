import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DateMixin } from '../lib/Date';
import { DateRangeMixin } from '../lib/DateRange';

export const DateRangeBundle = [
  DateMixin as Mixin,
  DateRangeMixin as Mixin];
