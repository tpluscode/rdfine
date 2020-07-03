import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { RadioSeasonMixin } from '../RadioSeason';

export const RadioSeasonBundle = [
  CreativeWorkSeasonMixin as Mixin,
  RadioSeasonMixin as Mixin];
