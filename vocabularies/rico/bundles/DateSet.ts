import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DateMixin } from '../lib/Date';
import { DateSetMixin } from '../lib/DateSet';

export const DateSetBundle = [
  DateMixin as Mixin,
  DateSetMixin as Mixin];
