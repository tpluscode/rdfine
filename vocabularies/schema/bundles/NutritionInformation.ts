import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { NutritionInformationMixin } from '../NutritionInformation';
import { EnergyMixin } from '../Energy';
import { MassMixin } from '../Mass';

export const NutritionInformationBundle = [
  StructuredValueMixin as Mixin,
  NutritionInformationMixin as Mixin,
  EnergyMixin as Mixin,
  MassMixin as Mixin];
