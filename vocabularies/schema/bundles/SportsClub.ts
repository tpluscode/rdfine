import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { SportsClubMixin } from '../lib/SportsClub';

export const SportsClubBundle = [
  SportsActivityLocationMixin as Mixin,
  SportsClubMixin as Mixin];
