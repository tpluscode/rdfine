import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { ResidenceMixin } from '../Residence';
import { FloorPlanMixin } from '../FloorPlan';

export const ResidenceBundle = [
  PlaceMixin as Mixin,
  ResidenceMixin as Mixin,
  FloorPlanMixin as Mixin];
