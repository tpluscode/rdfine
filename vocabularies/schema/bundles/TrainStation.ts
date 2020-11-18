import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { TrainStationMixin } from '../lib/TrainStation';

export const TrainStationBundle = [
  CivicStructureMixin as Mixin,
  TrainStationMixin as Mixin];
