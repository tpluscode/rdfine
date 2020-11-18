import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';

export const GovernmentBuildingBundle = [
  CivicStructureMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
