import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../lib/Landform';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';

export const BodyOfWaterBundle = [
  LandformMixin as Mixin,
  BodyOfWaterMixin as Mixin];
