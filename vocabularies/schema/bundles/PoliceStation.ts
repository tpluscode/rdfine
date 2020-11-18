import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EmergencyServiceMixin } from '../lib/EmergencyService';
import { PoliceStationMixin } from '../lib/PoliceStation';

export const PoliceStationBundle = [
  CivicStructureMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  PoliceStationMixin as Mixin];
