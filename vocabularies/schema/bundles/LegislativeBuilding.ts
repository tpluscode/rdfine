import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';
import { LegislativeBuildingMixin } from '../LegislativeBuilding';

export const LegislativeBuildingBundle = [
  GovernmentBuildingMixin as Mixin,
  LegislativeBuildingMixin as Mixin];
