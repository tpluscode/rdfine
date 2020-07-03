import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { VolcanoMixin } from '../Volcano';

export const VolcanoBundle = [
  LandformMixin as Mixin,
  VolcanoMixin as Mixin];
