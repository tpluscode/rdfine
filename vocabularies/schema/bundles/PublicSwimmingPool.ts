import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { PublicSwimmingPoolMixin } from '../PublicSwimmingPool';

export const PublicSwimmingPoolBundle = [
  SportsActivityLocationMixin as Mixin,
  PublicSwimmingPoolMixin as Mixin];
