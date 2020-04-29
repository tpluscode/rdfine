import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../Accommodation';
import { ApartmentMixin } from '../Apartment';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const ApartmentDependencies = [
  AccommodationMixin as Mixin,
  ApartmentMixin as Mixin,
  QuantitativeValueMixin as Mixin];
