import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BusStopMixin } from '../lib/BusStop';
import { CivicStructureMixin } from '../lib/CivicStructure';

export const BusStopBundle = [
  BusStopMixin as Mixin,
  CivicStructureMixin as Mixin];
