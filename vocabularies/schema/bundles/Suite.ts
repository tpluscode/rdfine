import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../Accommodation';
import { SuiteMixin } from '../Suite';
import { BedDetailsMixin } from '../BedDetails';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const SuiteBundle = [
  AccommodationMixin as Mixin,
  SuiteMixin as Mixin,
  BedDetailsMixin as Mixin,
  QuantitativeValueMixin as Mixin];
