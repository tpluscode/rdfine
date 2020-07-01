import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { MountainMixin } from '../Mountain';

export const MountainBundle = [
  LandformMixin as Mixin,
  MountainMixin as Mixin];
