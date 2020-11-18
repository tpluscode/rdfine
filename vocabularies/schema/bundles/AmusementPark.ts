import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { AmusementParkMixin } from '../lib/AmusementPark';

export const AmusementParkBundle = [
  EntertainmentBusinessMixin as Mixin,
  AmusementParkMixin as Mixin];
