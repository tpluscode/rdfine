import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SeasonMixin } from '../lib/Season';

export const SeasonBundle = [
  CreativeWorkMixin as Mixin,
  SeasonMixin as Mixin];
