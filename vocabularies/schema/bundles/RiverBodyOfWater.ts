import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { RiverBodyOfWaterMixin } from '../RiverBodyOfWater';

export const RiverBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  RiverBodyOfWaterMixin as Mixin];
