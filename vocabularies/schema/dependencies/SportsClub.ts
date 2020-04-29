import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { SportsClubMixin } from '../SportsClub';

export const SportsClubDependencies = [
  SportsActivityLocationMixin as Mixin,
  SportsClubMixin as Mixin];
