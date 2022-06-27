import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BusStationMixin } from '../lib/BusStation';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const BusStationBundle = [
  BusStationMixin as Mixin,
  CivicStructureMixin as Mixin];
