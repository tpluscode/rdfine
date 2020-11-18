import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MenuMixin } from '../lib/Menu';
import { MenuItemMixin } from '../lib/MenuItem';
import { MenuSectionMixin } from '../lib/MenuSection';

export const MenuBundle = [
  CreativeWorkMixin as Mixin,
  MenuMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin];
