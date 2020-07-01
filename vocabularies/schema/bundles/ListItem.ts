import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ListItemMixin } from '../ListItem';
import { ThingMixin } from '../Thing';

export const ListItemBundle = [
  IntangibleMixin as Mixin,
  ListItemMixin as Mixin,
  ThingMixin as Mixin];
