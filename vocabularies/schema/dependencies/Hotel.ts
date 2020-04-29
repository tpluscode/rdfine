import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../LodgingBusiness';
import { HotelMixin } from '../Hotel';

export const HotelDependencies = [
  LodgingBusinessMixin as Mixin,
  HotelMixin as Mixin];
