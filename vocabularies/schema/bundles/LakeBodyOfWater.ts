import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { LakeBodyOfWaterMixin } from '../LakeBodyOfWater';

export const LakeBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  LakeBodyOfWaterMixin as Mixin];
