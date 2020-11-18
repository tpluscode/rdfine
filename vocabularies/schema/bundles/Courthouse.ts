import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';
import { CourthouseMixin } from '../lib/Courthouse';

export const CourthouseBundle = [
  GovernmentBuildingMixin as Mixin,
  CourthouseMixin as Mixin];
