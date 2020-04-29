import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { PublicSwimmingPoolMixin } from '../PublicSwimmingPool';

export const PublicSwimmingPoolDependencies = [
  SportsActivityLocationMixin as Mixin,
  PublicSwimmingPoolMixin as Mixin];
