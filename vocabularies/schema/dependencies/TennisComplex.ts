import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { TennisComplexMixin } from '../TennisComplex';

export const TennisComplexDependencies = [
  SportsActivityLocationMixin as Mixin,
  TennisComplexMixin as Mixin];
