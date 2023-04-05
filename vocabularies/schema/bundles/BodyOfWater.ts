import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { LandformMixin } from '../lib/Landform';

export const BodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  LandformMixin as Mixin];
