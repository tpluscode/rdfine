import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DateMixin } from '../lib/Date.js';
import { DateSetMixin } from '../lib/DateSet.js';

export const DateSetBundle = [
  DateMixin as Mixin,
  DateSetMixin as Mixin];
