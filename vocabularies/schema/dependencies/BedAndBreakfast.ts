import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { BedAndBreakfastMixin } from '../BedAndBreakfast';

export const BedAndBreakfastDependencies = [
  LodgingBusinessMixin as Mixin,
  BedAndBreakfastMixin as Mixin];
