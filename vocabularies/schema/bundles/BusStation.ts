import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BusStationMixin } from '../BusStation';

export const BusStationBundle = [
  CivicStructureMixin as Mixin,
  BusStationMixin as Mixin];
