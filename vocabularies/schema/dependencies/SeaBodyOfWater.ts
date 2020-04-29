import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { SeaBodyOfWaterMixin } from '../SeaBodyOfWater';

export const SeaBodyOfWaterDependencies = [
  BodyOfWaterMixin as Mixin,
  SeaBodyOfWaterMixin as Mixin];
