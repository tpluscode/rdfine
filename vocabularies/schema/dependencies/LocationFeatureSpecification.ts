import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyValueMixin } from '../PropertyValue';
import { LocationFeatureSpecificationMixin } from '../LocationFeatureSpecification';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';

export const LocationFeatureSpecificationDependencies = [
  PropertyValueMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin];
