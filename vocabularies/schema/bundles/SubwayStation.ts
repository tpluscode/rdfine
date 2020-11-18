import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { SubwayStationMixin } from '../lib/SubwayStation';

export const SubwayStationBundle = [
  CivicStructureMixin as Mixin,
  SubwayStationMixin as Mixin];
