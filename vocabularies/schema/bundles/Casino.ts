import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { CasinoMixin } from '../Casino';

export const CasinoBundle = [
  EntertainmentBusinessMixin as Mixin,
  CasinoMixin as Mixin];
