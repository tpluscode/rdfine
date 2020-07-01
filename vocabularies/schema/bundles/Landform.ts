import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { LandformMixin } from '../Landform';

export const LandformBundle = [
  PlaceMixin as Mixin,
  LandformMixin as Mixin];
