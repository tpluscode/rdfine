import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ListItemMixin } from '../lib/ListItem';
import { HowToItemMixin } from '../lib/HowToItem';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const HowToItemBundle = [
  ListItemMixin as Mixin,
  HowToItemMixin as Mixin,
  QuantitativeValueMixin as Mixin];
