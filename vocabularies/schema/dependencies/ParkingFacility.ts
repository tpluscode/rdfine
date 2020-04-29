import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { ParkingFacilityMixin } from '../ParkingFacility';

export const ParkingFacilityDependencies = [
  CivicStructureMixin as Mixin,
  ParkingFacilityMixin as Mixin];
