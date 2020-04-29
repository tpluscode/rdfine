import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HouseMixin } from '../House';
import { SingleFamilyResidenceMixin } from '../SingleFamilyResidence';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const SingleFamilyResidenceDependencies = [
  HouseMixin as Mixin,
  SingleFamilyResidenceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
