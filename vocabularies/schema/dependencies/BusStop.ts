import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { BusStopMixin } from '../BusStop';

export const BusStopDependencies = [
  CivicStructureMixin as Mixin,
  BusStopMixin as Mixin];
