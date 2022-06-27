import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResortMixin } from '../lib/Resort';
import { SkiResortMixin } from '../lib/SkiResort';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const SkiResortBundle = [
  ResortMixin as Mixin,
  SkiResortMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
