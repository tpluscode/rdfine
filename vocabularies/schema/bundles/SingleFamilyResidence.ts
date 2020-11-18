import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HouseMixin } from '../lib/House';
import { SingleFamilyResidenceMixin } from '../lib/SingleFamilyResidence';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const SingleFamilyResidenceBundle = [
  HouseMixin as Mixin,
  SingleFamilyResidenceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
