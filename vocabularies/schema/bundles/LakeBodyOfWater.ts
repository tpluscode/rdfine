import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { LakeBodyOfWaterMixin } from '../lib/LakeBodyOfWater';

export const LakeBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  LakeBodyOfWaterMixin as Mixin];
