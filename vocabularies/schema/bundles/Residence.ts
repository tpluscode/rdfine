import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FloorPlanMixin } from '../lib/FloorPlan';
import { PlaceMixin } from '../lib/Place';
import { ResidenceMixin } from '../lib/Residence';

export const ResidenceBundle = [
  FloorPlanMixin as Mixin,
  PlaceMixin as Mixin,
  ResidenceMixin as Mixin];
