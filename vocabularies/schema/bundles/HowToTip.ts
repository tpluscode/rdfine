import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { HowToTipMixin } from '../lib/HowToTip';
import { ListItemMixin } from '../lib/ListItem';

export const HowToTipBundle = [
  CreativeWorkMixin as Mixin,
  HowToTipMixin as Mixin,
  ListItemMixin as Mixin];
