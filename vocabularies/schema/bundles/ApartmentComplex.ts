import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../Residence';
import { ApartmentComplexMixin } from '../ApartmentComplex';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const ApartmentComplexBundle = [
  ResidenceMixin as Mixin,
  ApartmentComplexMixin as Mixin,
  QuantitativeValueMixin as Mixin];
