import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { SkiResortMixin } from '../lib/SkiResort';

export const SkiResortBundle = [
  SportsActivityLocationMixin as Mixin,
  SkiResortMixin as Mixin];
