import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';

export const GovernmentBuildingDependencies = [
  CivicStructureMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
