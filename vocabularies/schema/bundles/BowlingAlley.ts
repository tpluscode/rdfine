import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BowlingAlleyMixin } from '../lib/BowlingAlley';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const BowlingAlleyBundle = [
  BowlingAlleyMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
