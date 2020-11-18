import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { AdultEntertainmentMixin } from '../lib/AdultEntertainment';

export const AdultEntertainmentBundle = [
  EntertainmentBusinessMixin as Mixin,
  AdultEntertainmentMixin as Mixin];
