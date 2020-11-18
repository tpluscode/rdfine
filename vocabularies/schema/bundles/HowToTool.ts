import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToItemMixin } from '../lib/HowToItem';
import { HowToToolMixin } from '../lib/HowToTool';

export const HowToToolBundle = [
  HowToItemMixin as Mixin,
  HowToToolMixin as Mixin];
