import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { MotelMixin } from '../lib/Motel';

export const MotelBundle = [
  LodgingBusinessMixin as Mixin,
  MotelMixin as Mixin];
