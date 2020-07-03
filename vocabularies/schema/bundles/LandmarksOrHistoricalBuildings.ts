import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { LandmarksOrHistoricalBuildingsMixin } from '../LandmarksOrHistoricalBuildings';

export const LandmarksOrHistoricalBuildingsBundle = [
  PlaceMixin as Mixin,
  LandmarksOrHistoricalBuildingsMixin as Mixin];
