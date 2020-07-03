import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { OceanBodyOfWaterMixin } from '../OceanBodyOfWater';

export const OceanBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  OceanBodyOfWaterMixin as Mixin];
