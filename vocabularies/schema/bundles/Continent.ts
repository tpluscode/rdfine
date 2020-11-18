import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../lib/Landform';
import { ContinentMixin } from '../lib/Continent';

export const ContinentBundle = [
  LandformMixin as Mixin,
  ContinentMixin as Mixin];
