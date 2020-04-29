import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { LakeBodyOfWaterMixin } from '../LakeBodyOfWater';

export const LakeBodyOfWaterDependencies = [
  BodyOfWaterMixin as Mixin,
  LakeBodyOfWaterMixin as Mixin];
