import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { FloorPlanMixin } from '../FloorPlan';
import { LocationFeatureSpecificationMixin } from '../LocationFeatureSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { AccommodationMixin } from '../Accommodation';

export const FloorPlanBundle = [
  IntangibleMixin as Mixin,
  FloorPlanMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  AccommodationMixin as Mixin];
