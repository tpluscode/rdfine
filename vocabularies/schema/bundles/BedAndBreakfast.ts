import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BedAndBreakfastMixin } from '../lib/BedAndBreakfast';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';

export const BedAndBreakfastBundle = [
  BedAndBreakfastMixin as Mixin,
  LodgingBusinessMixin as Mixin];
