import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LandmarksOrHistoricalBuildingsMixin } from '../lib/LandmarksOrHistoricalBuildings';
import { PlaceMixin } from '../lib/Place';

export const LandmarksOrHistoricalBuildingsBundle = [
  LandmarksOrHistoricalBuildingsMixin as Mixin,
  PlaceMixin as Mixin];
