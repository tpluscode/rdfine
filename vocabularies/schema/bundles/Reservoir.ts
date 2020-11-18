import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { ReservoirMixin } from '../lib/Reservoir';

export const ReservoirBundle = [
  BodyOfWaterMixin as Mixin,
  ReservoirMixin as Mixin];
