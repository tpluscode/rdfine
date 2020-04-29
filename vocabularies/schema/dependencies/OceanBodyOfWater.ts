import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { OceanBodyOfWaterMixin } from '../OceanBodyOfWater';

export const OceanBodyOfWaterDependencies = [
  BodyOfWaterMixin as Mixin,
  OceanBodyOfWaterMixin as Mixin];
