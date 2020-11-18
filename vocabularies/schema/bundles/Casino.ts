import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { CasinoMixin } from '../lib/Casino';

export const CasinoBundle = [
  EntertainmentBusinessMixin as Mixin,
  CasinoMixin as Mixin];
