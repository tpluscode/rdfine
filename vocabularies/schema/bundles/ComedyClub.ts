import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { ComedyClubMixin } from '../ComedyClub';

export const ComedyClubBundle = [
  EntertainmentBusinessMixin as Mixin,
  ComedyClubMixin as Mixin];
