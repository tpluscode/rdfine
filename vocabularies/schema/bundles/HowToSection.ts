import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { HowToSectionMixin } from '../lib/HowToSection';
import { ItemListMixin } from '../lib/ItemList';
import { ListItemMixin } from '../lib/ListItem';

export const HowToSectionBundle = [
  CreativeWorkMixin as Mixin,
  HowToSectionMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin];
