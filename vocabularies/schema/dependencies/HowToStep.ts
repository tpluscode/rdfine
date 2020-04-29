import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ItemListMixin } from '../ItemList';
import { ListItemMixin } from '../ListItem';
import { HowToStepMixin } from '../HowToStep';

export const HowToStepDependencies = [
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  HowToStepMixin as Mixin];
