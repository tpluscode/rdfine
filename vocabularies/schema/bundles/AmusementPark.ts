import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AmusementParkMixin } from '../lib/AmusementPark';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const AmusementParkBundle = [
  AmusementParkMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
