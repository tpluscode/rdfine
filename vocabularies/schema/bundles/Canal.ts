import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { CanalMixin } from '../lib/Canal';

export const CanalBundle = [
  BodyOfWaterMixin as Mixin,
  CanalMixin as Mixin];
