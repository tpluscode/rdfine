import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { FloorPlanMixin } from '../lib/FloorPlan';
import { ImageObjectMixin } from '../lib/ImageObject';
import { IntangibleMixin } from '../lib/Intangible';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const FloorPlanBundle = [
  AccommodationMixin as Mixin,
  FloorPlanMixin as Mixin,
  ImageObjectMixin as Mixin,
  IntangibleMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
