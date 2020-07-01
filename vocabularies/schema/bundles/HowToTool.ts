import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToItemMixin } from '../HowToItem';
import { HowToToolMixin } from '../HowToTool';

export const HowToToolBundle = [
  HowToItemMixin as Mixin,
  HowToToolMixin as Mixin];
