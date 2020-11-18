import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { HowToMixin } from '../lib/HowTo';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { DurationMixin } from '../lib/Duration';
import { HowToSectionMixin } from '../lib/HowToSection';
import { HowToStepMixin } from '../lib/HowToStep';
import { ItemListMixin } from '../lib/ItemList';
import { HowToSupplyMixin } from '../lib/HowToSupply';
import { HowToToolMixin } from '../lib/HowToTool';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

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
