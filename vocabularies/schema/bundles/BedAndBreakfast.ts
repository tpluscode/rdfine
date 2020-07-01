import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { BedAndBreakfastMixin } from '../BedAndBreakfast';

export const BedAndBreakfastBundle = [
  LodgingBusinessMixin as Mixin,
  BedAndBreakfastMixin as Mixin];
