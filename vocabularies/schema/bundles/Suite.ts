import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { BedDetailsMixin } from '../lib/BedDetails';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { SuiteMixin } from '../lib/Suite';

export const SuiteBundle = [
  AccommodationMixin as Mixin,
  BedDetailsMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  SuiteMixin as Mixin];
