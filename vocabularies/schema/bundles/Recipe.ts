import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToMixin } from '../lib/HowTo';
import { RecipeMixin } from '../lib/Recipe';
import { DurationMixin } from '../lib/Duration';
import { NutritionInformationMixin } from '../lib/NutritionInformation';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ItemListMixin } from '../lib/ItemList';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const RecipeBundle = [
  HowToMixin as Mixin,
  RecipeMixin as Mixin,
  DurationMixin as Mixin,
  NutritionInformationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  QuantitativeValueMixin as Mixin];
