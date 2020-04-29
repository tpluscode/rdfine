import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { CasinoMixin } from '../Casino';

export const CasinoDependencies = [
  EntertainmentBusinessMixin as Mixin,
  CasinoMixin as Mixin];
