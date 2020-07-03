import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { SubwayStationMixin } from '../SubwayStation';

export const SubwayStationBundle = [
  CivicStructureMixin as Mixin,
  SubwayStationMixin as Mixin];
