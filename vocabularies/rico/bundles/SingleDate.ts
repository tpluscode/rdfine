import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DateMixin } from '../lib/Date.js';
import { SingleDateMixin } from '../lib/SingleDate.js';

export const SingleDateBundle = [
  DateMixin as Mixin,
  SingleDateMixin as Mixin];
