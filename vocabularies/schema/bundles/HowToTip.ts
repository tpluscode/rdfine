import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ListItemMixin } from '../lib/ListItem';
import { HowToTipMixin } from '../lib/HowToTip';

export const HowToTipBundle = [
  CreativeWorkMixin as Mixin,
  ListItemMixin as Mixin,
  HowToTipMixin as Mixin];
