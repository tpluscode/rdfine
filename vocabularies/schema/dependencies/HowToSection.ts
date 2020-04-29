import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ItemListMixin } from '../ItemList';
import { ListItemMixin } from '../ListItem';
import { HowToSectionMixin } from '../HowToSection';

export const HowToSectionDependencies = [
  CreativeWorkMixin as Mixin,
  ItemListMixin as Mixin,
  ListItemMixin as Mixin,
  HowToSectionMixin as Mixin];
