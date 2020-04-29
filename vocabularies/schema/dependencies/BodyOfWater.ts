import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { BodyOfWaterMixin } from '../BodyOfWater';

export const BodyOfWaterDependencies = [
  LandformMixin as Mixin,
  BodyOfWaterMixin as Mixin];
