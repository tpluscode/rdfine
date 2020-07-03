import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ItemListMixin } from '../ItemList';
import { ListItemMixin } from '../ListItem';
import { ThingMixin } from '../Thing';

export const ItemListBundle = [
  IntangibleMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  ThingMixin as Mixin];
