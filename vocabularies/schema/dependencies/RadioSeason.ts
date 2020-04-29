import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkSeasonMixin } from '../CreativeWorkSeason';
import { RadioSeasonMixin } from '../RadioSeason';

export const RadioSeasonDependencies = [
  CreativeWorkSeasonMixin as Mixin,
  RadioSeasonMixin as Mixin];
