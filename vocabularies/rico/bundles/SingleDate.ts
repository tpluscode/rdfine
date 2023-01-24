import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DateMixin } from '../lib/Date';
import { SingleDateMixin } from '../lib/SingleDate';

export const SingleDateBundle = [
  DateMixin as Mixin,
  SingleDateMixin as Mixin];
