import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { ReservoirMixin } from '../Reservoir';

export const ReservoirBundle = [
  BodyOfWaterMixin as Mixin,
  ReservoirMixin as Mixin];
