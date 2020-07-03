import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HouseMixin } from '../House';
import { SingleFamilyResidenceMixin } from '../SingleFamilyResidence';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const SingleFamilyResidenceBundle = [
  HouseMixin as Mixin,
  SingleFamilyResidenceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
