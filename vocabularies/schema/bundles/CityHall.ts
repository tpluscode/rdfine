import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';
import { CityHallMixin } from '../lib/CityHall';

export const CityHallBundle = [
  GovernmentBuildingMixin as Mixin,
  CityHallMixin as Mixin];
