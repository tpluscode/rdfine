import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { HealthClubMixin } from '../lib/HealthClub';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const HealthClubBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  HealthClubMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
