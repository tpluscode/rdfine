import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { HowToStepMixin } from '../lib/HowToStep';
import { ItemListMixin } from '../lib/ItemList';
import { ListItemMixin } from '../lib/ListItem';

export const HowToStepBundle = [
  CreativeWorkMixin as Mixin,
  HowToStepMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin];
