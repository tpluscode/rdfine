import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';
import { CourthouseMixin } from '../Courthouse';

export const CourthouseBundle = [
  GovernmentBuildingMixin as Mixin,
  CourthouseMixin as Mixin];
