import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { TrainStationMixin } from '../TrainStation';

export const TrainStationDependencies = [
  CivicStructureMixin as Mixin,
  TrainStationMixin as Mixin];
