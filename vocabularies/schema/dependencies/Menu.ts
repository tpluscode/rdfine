import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MenuMixin } from '../Menu';
import { MenuItemMixin } from '../MenuItem';
import { MenuSectionMixin } from '../MenuSection';

export const MenuDependencies = [
  CreativeWorkMixin as Mixin,
  MenuMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin];
