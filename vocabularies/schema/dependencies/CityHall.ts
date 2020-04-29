import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';
import { CityHallMixin } from '../CityHall';

export const CityHallDependencies = [
  GovernmentBuildingMixin as Mixin,
  CityHallMixin as Mixin];
