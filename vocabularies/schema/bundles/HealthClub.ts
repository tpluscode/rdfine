import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { HealthClubMixin } from '../HealthClub';

export const HealthClubBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  HealthClubMixin as Mixin];
