import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';

export const LocationFeatureSpecificationBundle = [
  PropertyValueMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin];
