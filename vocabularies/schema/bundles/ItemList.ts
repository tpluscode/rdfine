import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ItemListMixin } from '../lib/ItemList';
import { ListItemMixin } from '../lib/ListItem';
import { ThingMixin } from '../lib/Thing';

export const ItemListBundle = [
  IntangibleMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  ThingMixin as Mixin];
