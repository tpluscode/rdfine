import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { NutritionInformationMixin } from '../lib/NutritionInformation';
import { EnergyMixin } from '../lib/Energy';
import { MassMixin } from '../lib/Mass';

export const NutritionInformationBundle = [
  StructuredValueMixin as Mixin,
  NutritionInformationMixin as Mixin,
  EnergyMixin as Mixin,
  MassMixin as Mixin];
