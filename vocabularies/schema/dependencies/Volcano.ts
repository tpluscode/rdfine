import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandformMixin } from '../Landform';
import { VolcanoMixin } from '../Volcano';

export const VolcanoDependencies = [
  LandformMixin as Mixin,
  VolcanoMixin as Mixin];
