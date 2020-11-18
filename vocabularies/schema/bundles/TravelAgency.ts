import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { TravelAgencyMixin } from '../lib/TravelAgency';

export const TravelAgencyBundle = [
  LocalBusinessMixin as Mixin,
  TravelAgencyMixin as Mixin];
