import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ListItemMixin } from '../ListItem';
import { HowToTipMixin } from '../HowToTip';

export const HowToTipDependencies = [
  CreativeWorkMixin as Mixin,
  ListItemMixin as Mixin,
  HowToTipMixin as Mixin];
