import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { ResortMixin } from '../lib/Resort';
import { SkiResortMixin } from '../lib/SkiResort';

export const SkiResortBundle = [
  SportsActivityLocationMixin as Mixin,
  ResortMixin as Mixin,
  SkiResortMixin as Mixin];
