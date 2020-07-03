import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { BodyOfWaterMixin } from '../BodyOfWater';

export const BodyOfWaterBundle = [
  LandformMixin as Mixin,
  BodyOfWaterMixin as Mixin];
