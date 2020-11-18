import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { BusStationMixin } from '../lib/BusStation';

export const BusStationBundle = [
  CivicStructureMixin as Mixin,
  BusStationMixin as Mixin];
