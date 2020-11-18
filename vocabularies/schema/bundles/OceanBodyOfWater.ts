import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { OceanBodyOfWaterMixin } from '../lib/OceanBodyOfWater';

export const OceanBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  OceanBodyOfWaterMixin as Mixin];
