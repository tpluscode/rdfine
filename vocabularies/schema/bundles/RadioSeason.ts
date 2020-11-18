import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeasonMixin } from '../lib/CreativeWorkSeason';
import { RadioSeasonMixin } from '../lib/RadioSeason';

export const RadioSeasonBundle = [
  CreativeWorkSeasonMixin as Mixin,
  RadioSeasonMixin as Mixin];
