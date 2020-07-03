import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { ContinentMixin } from '../Continent';

export const ContinentBundle = [
  LandformMixin as Mixin,
  ContinentMixin as Mixin];
