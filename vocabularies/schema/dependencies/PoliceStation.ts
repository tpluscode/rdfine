import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { EmergencyServiceMixin } from '../EmergencyService';
import { PoliceStationMixin } from '../PoliceStation';

export const PoliceStationDependencies = [
  CivicStructureMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  PoliceStationMixin as Mixin];
