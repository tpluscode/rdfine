import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToItemMixin } from '../lib/HowToItem';
import { ListItemMixin } from '../lib/ListItem';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const HowToItemBundle = [
  HowToItemMixin as Mixin,
  ListItemMixin as Mixin,
  QuantitativeValueMixin as Mixin];
