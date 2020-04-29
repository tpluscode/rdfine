import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { AmusementParkMixin } from '../AmusementPark';

export const AmusementParkDependencies = [
  EntertainmentBusinessMixin as Mixin,
  AmusementParkMixin as Mixin];
