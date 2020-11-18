import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { HealthClubMixin } from '../lib/HealthClub';

export const HealthClubBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  HealthClubMixin as Mixin];
