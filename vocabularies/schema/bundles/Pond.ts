import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { PondMixin } from '../lib/Pond';

export const PondBundle = [
  BodyOfWaterMixin as Mixin,
  PondMixin as Mixin];
