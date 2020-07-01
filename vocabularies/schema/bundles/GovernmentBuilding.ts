import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';

export const GovernmentBuildingBundle = [
  CivicStructureMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
