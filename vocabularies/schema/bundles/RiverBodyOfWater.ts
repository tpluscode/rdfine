import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { RiverBodyOfWaterMixin } from '../lib/RiverBodyOfWater';

export const RiverBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  RiverBodyOfWaterMixin as Mixin];
