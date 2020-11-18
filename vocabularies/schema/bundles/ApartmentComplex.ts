import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../lib/Residence';
import { ApartmentComplexMixin } from '../lib/ApartmentComplex';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const ApartmentComplexBundle = [
  ResidenceMixin as Mixin,
  ApartmentComplexMixin as Mixin,
  QuantitativeValueMixin as Mixin];
