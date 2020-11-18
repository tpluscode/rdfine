import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';
import { HotelMixin } from '../lib/Hotel';

export const HotelBundle = [
  LodgingBusinessMixin as Mixin,
  HotelMixin as Mixin];
