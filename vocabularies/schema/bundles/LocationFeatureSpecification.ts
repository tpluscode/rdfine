import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const LocationFeatureSpecificationBundle = [
  LocationFeatureSpecificationMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  PropertyValueMixin as Mixin];
