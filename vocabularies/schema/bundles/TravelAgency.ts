import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { TravelAgencyMixin } from '../TravelAgency';

export const TravelAgencyBundle = [
  LocalBusinessMixin as Mixin,
  TravelAgencyMixin as Mixin];
