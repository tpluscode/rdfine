import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { HowToMixin } from '../lib/HowTo';
import { HowToSectionMixin } from '../lib/HowToSection';
import { HowToStepMixin } from '../lib/HowToStep';
import { HowToSupplyMixin } from '../lib/HowToSupply';
import { HowToToolMixin } from '../lib/HowToTool';
import { ItemListMixin } from '../lib/ItemList';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const HowToBundle = [
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  HowToMixin as Mixin,
  HowToSectionMixin as Mixin,
  HowToStepMixin as Mixin,
  HowToSupplyMixin as Mixin,
  HowToToolMixin as Mixin,
  ItemListMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  QuantitativeValueMixin as Mixin];
