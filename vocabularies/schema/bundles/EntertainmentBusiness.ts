import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const EntertainmentBusinessBundle = [
  LocalBusinessMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
