import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { FloorPlanMixin } from '../lib/FloorPlan';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { AccommodationMixin } from '../lib/Accommodation';

export const FloorPlanBundle = [
  IntangibleMixin as Mixin,
  FloorPlanMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  AccommodationMixin as Mixin];
