import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { SeriesMixin } from '../lib/Series';

export const SeriesBundle = [
  IntangibleMixin as Mixin,
  SeriesMixin as Mixin];
