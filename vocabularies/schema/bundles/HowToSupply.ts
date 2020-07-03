import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToItemMixin } from '../HowToItem';
import { HowToSupplyMixin } from '../HowToSupply';
import { MonetaryAmountMixin } from '../MonetaryAmount';

export const HowToSupplyBundle = [
  HowToItemMixin as Mixin,
  HowToSupplyMixin as Mixin,
  MonetaryAmountMixin as Mixin];
