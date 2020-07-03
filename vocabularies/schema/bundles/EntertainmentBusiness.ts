import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';

export const EntertainmentBusinessBundle = [
  LocalBusinessMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
