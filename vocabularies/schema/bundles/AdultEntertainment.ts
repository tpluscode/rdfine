import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdultEntertainmentMixin } from '../lib/AdultEntertainment';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const AdultEntertainmentBundle = [
  AdultEntertainmentMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
