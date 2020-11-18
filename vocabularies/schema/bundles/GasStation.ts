import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { GasStationMixin } from '../lib/GasStation';

export const GasStationBundle = [
  AutomotiveBusinessMixin as Mixin,
  GasStationMixin as Mixin];
