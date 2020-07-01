import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ListItemMixin } from '../ListItem';
import { HowToItemMixin } from '../HowToItem';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const HowToItemBundle = [
  ListItemMixin as Mixin,
  HowToItemMixin as Mixin,
  QuantitativeValueMixin as Mixin];
