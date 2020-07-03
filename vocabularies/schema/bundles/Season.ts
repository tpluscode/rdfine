import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SeasonMixin } from '../Season';

export const SeasonBundle = [
  CreativeWorkMixin as Mixin,
  SeasonMixin as Mixin];
