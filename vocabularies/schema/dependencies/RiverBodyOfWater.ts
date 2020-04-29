import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { RiverBodyOfWaterMixin } from '../RiverBodyOfWater';

export const RiverBodyOfWaterDependencies = [
  BodyOfWaterMixin as Mixin,
  RiverBodyOfWaterMixin as Mixin];
