import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BusStationMixin } from '../BusStation';

export const BusStationDependencies = [
  CivicStructureMixin as Mixin,
  BusStationMixin as Mixin];
