import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ApartmentComplexMixin } from '../lib/ApartmentComplex';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ResidenceMixin } from '../lib/Residence';

export const ApartmentComplexBundle = [
  ApartmentComplexMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ResidenceMixin as Mixin];
