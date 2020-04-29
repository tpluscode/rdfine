import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HowToItemMixin } from '../HowToItem';
import { HowToToolMixin } from '../HowToTool';

export const HowToToolDependencies = [
  HowToItemMixin as Mixin,
  HowToToolMixin as Mixin];
