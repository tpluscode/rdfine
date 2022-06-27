import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CasinoMixin } from '../lib/Casino';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const CasinoBundle = [
  CasinoMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
