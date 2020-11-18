import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ItemListMixin } from '../lib/ItemList';
import { ListItemMixin } from '../lib/ListItem';
import { HowToStepMixin } from '../lib/HowToStep';

export const HowToStepBundle = [
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  HowToStepMixin as Mixin];
