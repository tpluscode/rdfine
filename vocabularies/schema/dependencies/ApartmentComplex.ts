import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResidenceMixin } from '../Residence';
import { ApartmentComplexMixin } from '../ApartmentComplex';

export const ApartmentComplexDependencies = [
  ResidenceMixin as Mixin,
  ApartmentComplexMixin as Mixin];
