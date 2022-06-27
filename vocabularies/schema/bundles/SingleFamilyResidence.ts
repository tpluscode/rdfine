import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HouseMixin } from '../lib/House';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { SingleFamilyResidenceMixin } from '../lib/SingleFamilyResidence';

export const SingleFamilyResidenceBundle = [
  HouseMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  SingleFamilyResidenceMixin as Mixin];
