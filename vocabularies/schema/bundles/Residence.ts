import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { ResidenceMixin } from '../lib/Residence';
import { FloorPlanMixin } from '../lib/FloorPlan';

export const ResidenceBundle = [
  PlaceMixin as Mixin,
  ResidenceMixin as Mixin,
  FloorPlanMixin as Mixin];
