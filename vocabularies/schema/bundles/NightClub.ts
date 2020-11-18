import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { NightClubMixin } from '../lib/NightClub';

export const NightClubBundle = [
  EntertainmentBusinessMixin as Mixin,
  NightClubMixin as Mixin];
