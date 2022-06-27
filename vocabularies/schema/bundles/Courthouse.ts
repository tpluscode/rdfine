import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CourthouseMixin } from '../lib/Courthouse';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';

export const CourthouseBundle = [
  CourthouseMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
