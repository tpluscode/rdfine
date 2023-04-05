import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContinentMixin } from '../lib/Continent';
import { LandformMixin } from '../lib/Landform';

export const ContinentBundle = [
  ContinentMixin as Mixin,
  LandformMixin as Mixin];
