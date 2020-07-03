import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../Residence';
import { ApartmentComplexMixin } from '../ApartmentComplex';

export const ApartmentComplexBundle = [
  ResidenceMixin as Mixin,
  ApartmentComplexMixin as Mixin];
