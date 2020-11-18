import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ListItemMixin } from '../lib/ListItem';
import { ThingMixin } from '../lib/Thing';

export const ListItemBundle = [
  IntangibleMixin as Mixin,
  ListItemMixin as Mixin,
  ThingMixin as Mixin];
