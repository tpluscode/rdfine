import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { ContinentMixin } from '../Continent';

export const ContinentDependencies = [
  LandformMixin as Mixin,
  ContinentMixin as Mixin];
