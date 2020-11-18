import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { ComedyClubMixin } from '../lib/ComedyClub';

export const ComedyClubBundle = [
  EntertainmentBusinessMixin as Mixin,
  ComedyClubMixin as Mixin];
