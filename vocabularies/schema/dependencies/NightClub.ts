import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { NightClubMixin } from '../NightClub';

export const NightClubDependencies = [
  EntertainmentBusinessMixin as Mixin,
  NightClubMixin as Mixin];
