import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicSwimmingPoolMixin } from '../lib/PublicSwimmingPool';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const PublicSwimmingPoolBundle = [
  PublicSwimmingPoolMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
