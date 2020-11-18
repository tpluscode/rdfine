import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToItemMixin } from '../lib/HowToItem';
import { HowToSupplyMixin } from '../lib/HowToSupply';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const HowToSupplyBundle = [
  HowToItemMixin as Mixin,
  HowToSupplyMixin as Mixin,
  MonetaryAmountMixin as Mixin];
