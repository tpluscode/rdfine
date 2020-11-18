import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { BedAndBreakfastMixin } from '../lib/BedAndBreakfast';

export const BedAndBreakfastBundle = [
  LodgingBusinessMixin as Mixin,
  BedAndBreakfastMixin as Mixin];
