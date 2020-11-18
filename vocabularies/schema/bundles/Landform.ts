import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { LandformMixin } from '../lib/Landform';

export const LandformBundle = [
  PlaceMixin as Mixin,
  LandformMixin as Mixin];
