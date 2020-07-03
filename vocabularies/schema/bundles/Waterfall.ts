import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../BodyOfWater';
import { WaterfallMixin } from '../Waterfall';

export const WaterfallBundle = [
  BodyOfWaterMixin as Mixin,
  WaterfallMixin as Mixin];
