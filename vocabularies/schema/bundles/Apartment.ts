import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { ApartmentMixin } from '../lib/Apartment';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const ApartmentBundle = [
  AccommodationMixin as Mixin,
  ApartmentMixin as Mixin,
  QuantitativeValueMixin as Mixin];
