import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../lib/Landform';
import { MountainMixin } from '../lib/Mountain';

export const MountainBundle = [
  LandformMixin as Mixin,
  MountainMixin as Mixin];
