import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { EmergencyServiceMixin } from '../lib/EmergencyService';
import { FireStationMixin } from '../lib/FireStation';

export const FireStationBundle = [
  CivicStructureMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  FireStationMixin as Mixin];
