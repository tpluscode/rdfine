import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ListItemMixin } from '../ListItem';
import { HowToDirectionMixin } from '../HowToDirection';
import { MediaObjectMixin } from '../MediaObject';
import { DurationMixin } from '../Duration';
import { HowToSupplyMixin } from '../HowToSupply';
import { HowToToolMixin } from '../HowToTool';

export const HowToDirectionDependencies = [
  CreativeWorkMixin as Mixin,
  ListItemMixin as Mixin,
  HowToDirectionMixin as Mixin,
  MediaObjectMixin as Mixin,
  DurationMixin as Mixin,
  HowToSupplyMixin as Mixin,
  HowToToolMixin as Mixin];
