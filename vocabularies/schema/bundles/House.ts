import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { HouseMixin } from '../lib/House';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const HouseBundle = [
  AccommodationMixin as Mixin,
  HouseMixin as Mixin,
  QuantitativeValueMixin as Mixin];
