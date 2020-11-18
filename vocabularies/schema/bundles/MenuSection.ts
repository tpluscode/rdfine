import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MenuSectionMixin } from '../lib/MenuSection';
import { MenuItemMixin } from '../lib/MenuItem';

export const MenuSectionBundle = [
  CreativeWorkMixin as Mixin,
  MenuSectionMixin as Mixin,
  MenuItemMixin as Mixin];
