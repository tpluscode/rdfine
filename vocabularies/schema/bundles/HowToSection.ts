import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ItemListMixin } from '../lib/ItemList';
import { ListItemMixin } from '../lib/ListItem';
import { HowToSectionMixin } from '../lib/HowToSection';

export const HowToSectionBundle = [
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  HowToSectionMixin as Mixin];
