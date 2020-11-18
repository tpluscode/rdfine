import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../lib/Landform';
import { VolcanoMixin } from '../lib/Volcano';

export const VolcanoBundle = [
  LandformMixin as Mixin,
  VolcanoMixin as Mixin];
