import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { ParkingFacilityMixin } from '../lib/ParkingFacility';

export const ParkingFacilityBundle = [
  CivicStructureMixin as Mixin,
  ParkingFacilityMixin as Mixin];
