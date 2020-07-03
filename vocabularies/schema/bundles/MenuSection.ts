import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MenuSectionMixin } from '../MenuSection';
import { MenuItemMixin } from '../MenuItem';

export const MenuSectionBundle = [
  CreativeWorkMixin as Mixin,
  MenuSectionMixin as Mixin,
  MenuItemMixin as Mixin];
