import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { SeaBodyOfWaterMixin } from '../SeaBodyOfWater';

export const SeaBodyOfWaterBundle = [
  BodyOfWaterMixin as Mixin,
  SeaBodyOfWaterMixin as Mixin];
