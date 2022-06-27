import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CityHallMixin } from '../lib/CityHall';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';

export const CityHallBundle = [
  CityHallMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
