import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComedyClubMixin } from '../lib/ComedyClub';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const ComedyClubBundle = [
  ComedyClubMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
