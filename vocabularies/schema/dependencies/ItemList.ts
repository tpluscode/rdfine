import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ItemListMixin } from '../ItemList';
import { ListItemMixin } from '../ListItem';
import { ThingMixin } from '../Thing';

export const ItemListDependencies = [
  IntangibleMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  ThingMixin as Mixin];
