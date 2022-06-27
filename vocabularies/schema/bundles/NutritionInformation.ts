import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EnergyMixin } from '../lib/Energy';
import { MassMixin } from '../lib/Mass';
import { NutritionInformationMixin } from '../lib/NutritionInformation';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const NutritionInformationBundle = [
  EnergyMixin as Mixin,
  MassMixin as Mixin,
  NutritionInformationMixin as Mixin,
  StructuredValueMixin as Mixin];
