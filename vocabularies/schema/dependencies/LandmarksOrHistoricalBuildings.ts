import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { LandmarksOrHistoricalBuildingsMixin } from '../LandmarksOrHistoricalBuildings';

export const LandmarksOrHistoricalBuildingsDependencies = [
  PlaceMixin as Mixin,
  LandmarksOrHistoricalBuildingsMixin as Mixin];
