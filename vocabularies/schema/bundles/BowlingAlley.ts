import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { BowlingAlleyMixin } from '../lib/BowlingAlley';

export const BowlingAlleyBundle = [
  SportsActivityLocationMixin as Mixin,
  BowlingAlleyMixin as Mixin];
