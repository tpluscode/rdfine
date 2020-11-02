import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { AccommodationMixin } from '../Accommodation';
import { FloorPlanMixin } from '../FloorPlan';
import { LocationFeatureSpecificationMixin } from '../LocationFeatureSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { DurationMixin } from '../Duration';

export const AccommodationBundle = [
  PlaceMixin as Mixin,
  AccommodationMixin as Mixin,
  FloorPlanMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  DurationMixin as Mixin];
