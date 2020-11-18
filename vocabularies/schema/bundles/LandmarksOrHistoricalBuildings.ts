import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { LandmarksOrHistoricalBuildingsMixin } from '../lib/LandmarksOrHistoricalBuildings';

export const LandmarksOrHistoricalBuildingsBundle = [
  PlaceMixin as Mixin,
  LandmarksOrHistoricalBuildingsMixin as Mixin];
