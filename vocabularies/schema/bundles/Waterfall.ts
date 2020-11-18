import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BodyOfWaterMixin } from '../lib/BodyOfWater';
import { WaterfallMixin } from '../lib/Waterfall';

export const WaterfallBundle = [
  BodyOfWaterMixin as Mixin,
  WaterfallMixin as Mixin];
