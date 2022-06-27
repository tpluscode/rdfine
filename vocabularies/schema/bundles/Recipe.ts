import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { HowToMixin } from '../lib/HowTo';
import { ItemListMixin } from '../lib/ItemList';
import { NutritionInformationMixin } from '../lib/NutritionInformation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { RecipeMixin } from '../lib/Recipe';

export const RecipeBundle = [
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  HowToMixin as Mixin,
  ItemListMixin as Mixin,
  NutritionInformationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RecipeMixin as Mixin];
