import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { PondMixin } from '../Pond';

export const PondBundle = [
  BodyOfWaterMixin as Mixin,
  PondMixin as Mixin];
