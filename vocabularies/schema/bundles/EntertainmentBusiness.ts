import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const EntertainmentBusinessBundle = [
  EntertainmentBusinessMixin as Mixin,
  LocalBusinessMixin as Mixin];
