import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';
import { LegislativeBuildingMixin } from '../lib/LegislativeBuilding';

export const LegislativeBuildingBundle = [
  GovernmentBuildingMixin as Mixin,
  LegislativeBuildingMixin as Mixin];
