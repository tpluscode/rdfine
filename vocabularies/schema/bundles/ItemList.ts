import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ItemListMixin } from '../lib/ItemList';
import { ThingMixin } from '../lib/Thing';
import { ListItemMixin } from '../lib/ListItem';

export const ItemListBundle = [
  IntangibleMixin as Mixin,
  ItemListMixin as Mixin,
  ThingMixin as Mixin,
  ListItemMixin as Mixin];
