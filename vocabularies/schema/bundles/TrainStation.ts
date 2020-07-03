import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { TrainStationMixin } from '../TrainStation';

export const TrainStationBundle = [
  CivicStructureMixin as Mixin,
  TrainStationMixin as Mixin];
