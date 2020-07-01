import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { HowToMixin } from '../HowTo';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { DurationMixin } from '../Duration';
import { HowToSectionMixin } from '../HowToSection';
import { HowToStepMixin } from '../HowToStep';
import { ItemListMixin } from '../ItemList';
import { HowToSupplyMixin } from '../HowToSupply';
import { HowToToolMixin } from '../HowToTool';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const HowToBundle = [
  CreativeWorkMixin as Mixin,
  HowToMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  DurationMixin as Mixin,
  HowToSectionMixin as Mixin,
  HowToStepMixin as Mixin,
  ItemListMixin as Mixin,
  HowToSupplyMixin as Mixin,
  HowToToolMixin as Mixin,
  QuantitativeValueMixin as Mixin];
