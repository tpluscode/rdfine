import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MenuItemMixin } from '../lib/MenuItem';
import { MenuSectionMixin } from '../lib/MenuSection';

export const MenuSectionBundle = [
  CreativeWorkMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin];
