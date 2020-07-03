import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { AmusementParkMixin } from '../AmusementPark';

export const AmusementParkBundle = [
  EntertainmentBusinessMixin as Mixin,
  AmusementParkMixin as Mixin];
