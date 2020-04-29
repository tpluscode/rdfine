import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { PondMixin } from '../Pond';

export const PondDependencies = [
  BodyOfWaterMixin as Mixin,
  PondMixin as Mixin];
