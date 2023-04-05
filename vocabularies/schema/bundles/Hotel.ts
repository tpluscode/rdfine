import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HotelMixin } from '../lib/Hotel';
import { LodgingBusinessMixin } from '../lib/LodgingBusiness';

export const HotelBundle = [
  HotelMixin as Mixin,
  LodgingBusinessMixin as Mixin];
