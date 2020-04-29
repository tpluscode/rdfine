import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { SubwayStationMixin } from '../SubwayStation';

export const SubwayStationDependencies = [
  CivicStructureMixin as Mixin,
  SubwayStationMixin as Mixin];
