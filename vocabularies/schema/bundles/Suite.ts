import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { SuiteMixin } from '../lib/Suite';
import { BedDetailsMixin } from '../lib/BedDetails';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const SuiteBundle = [
  AccommodationMixin as Mixin,
  SuiteMixin as Mixin,
  BedDetailsMixin as Mixin,
  QuantitativeValueMixin as Mixin];
