import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork.js';
import { MenuItemMixin } from '../lib/MenuItem.js';
import { MenuSectionMixin } from '../lib/MenuSection.js';

export const MenuSectionBundle = [
  CreativeWorkMixin as Mixin,
  MenuItemMixin as Mixin,
  MenuSectionMixin as Mixin];
