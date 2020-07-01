import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToMixin } from '../HowTo';
import { RecipeMixin } from '../Recipe';
import { DurationMixin } from '../Duration';
import { NutritionInformationMixin } from '../NutritionInformation';
import { CreativeWorkMixin } from '../CreativeWork';
import { ItemListMixin } from '../ItemList';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const RecipeBundle = [
  HowToMixin as Mixin,
  RecipeMixin as Mixin,
  DurationMixin as Mixin,
  NutritionInformationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  QuantitativeValueMixin as Mixin];
