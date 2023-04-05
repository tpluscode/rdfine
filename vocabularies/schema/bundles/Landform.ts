import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../lib/Landform';
import { PlaceMixin } from '../lib/Place';

export const LandformBundle = [
  LandformMixin as Mixin,
  PlaceMixin as Mixin];
