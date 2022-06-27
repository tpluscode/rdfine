import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MenuItemMixin } from '../lib/MenuItem';
import { MenuMixin } from '../lib/Menu';
import { MenuSectionMixin } from '../lib/MenuSection';

export const MenuBundle = [
  CreativeWorkMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuMixin as Mixin,
  MenuSectionMixin as Mixin];
