import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { TennisComplexMixin } from '../lib/TennisComplex';

export const TennisComplexBundle = [
  SportsActivityLocationMixin as Mixin,
  TennisComplexMixin as Mixin];
