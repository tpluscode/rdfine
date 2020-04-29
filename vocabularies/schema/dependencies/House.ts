import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../Accommodation';
import { HouseMixin } from '../House';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const HouseDependencies = [
  AccommodationMixin as Mixin,
  HouseMixin as Mixin,
  QuantitativeValueMixin as Mixin];
