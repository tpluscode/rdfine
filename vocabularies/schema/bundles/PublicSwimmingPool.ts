import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { PublicSwimmingPoolMixin } from '../lib/PublicSwimmingPool';

export const PublicSwimmingPoolBundle = [
  SportsActivityLocationMixin as Mixin,
  PublicSwimmingPoolMixin as Mixin];
