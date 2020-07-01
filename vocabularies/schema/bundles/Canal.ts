import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { CanalMixin } from '../Canal';

export const CanalBundle = [
  BodyOfWaterMixin as Mixin,
  CanalMixin as Mixin];
