import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { BowlingAlleyMixin } from '../BowlingAlley';

export const BowlingAlleyDependencies = [
  SportsActivityLocationMixin as Mixin,
  BowlingAlleyMixin as Mixin];
