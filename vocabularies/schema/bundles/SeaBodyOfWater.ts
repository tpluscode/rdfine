import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { SeaBodyOfWaterMixin } from '../lib/SeaBodyOfWater';

export const SeaBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  SeaBodyOfWaterMixin as Mixin];
