import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { AccommodationMixin } from '../Accommodation';
import { LocationFeatureSpecificationMixin } from '../LocationFeatureSpecification';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const AccommodationBundle = [
  PlaceMixin as Mixin,
  AccommodationMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
