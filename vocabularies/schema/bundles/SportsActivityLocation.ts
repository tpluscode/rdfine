import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const SportsActivityLocationBundle = [
  LocalBusinessMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
