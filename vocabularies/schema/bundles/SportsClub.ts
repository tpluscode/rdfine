import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { SportsClubMixin } from '../SportsClub';

export const SportsClubBundle = [
  SportsActivityLocationMixin as Mixin,
  SportsClubMixin as Mixin];
