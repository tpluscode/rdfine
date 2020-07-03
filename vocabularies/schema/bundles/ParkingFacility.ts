import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { ParkingFacilityMixin } from '../ParkingFacility';

export const ParkingFacilityBundle = [
  CivicStructureMixin as Mixin,
  ParkingFacilityMixin as Mixin];
