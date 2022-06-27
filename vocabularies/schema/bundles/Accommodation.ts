import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { DurationMixin } from '../lib/Duration';
import { FloorPlanMixin } from '../lib/FloorPlan';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { PlaceMixin } from '../lib/Place';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const AccommodationBundle = [
  AccommodationMixin as Mixin,
  DurationMixin as Mixin,
  FloorPlanMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  PlaceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
