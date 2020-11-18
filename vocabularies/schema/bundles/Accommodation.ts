import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { AccommodationMixin } from '../lib/Accommodation';
import { FloorPlanMixin } from '../lib/FloorPlan';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { DurationMixin } from '../lib/Duration';

export const AccommodationBundle = [
  PlaceMixin as Mixin,
  AccommodationMixin as Mixin,
  FloorPlanMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  DurationMixin as Mixin];
