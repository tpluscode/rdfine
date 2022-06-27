import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { HowToDirectionMixin } from '../lib/HowToDirection';
import { HowToSupplyMixin } from '../lib/HowToSupply';
import { HowToToolMixin } from '../lib/HowToTool';
import { ListItemMixin } from '../lib/ListItem';
import { MediaObjectMixin } from '../lib/MediaObject';

export const HowToDirectionBundle = [
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  HowToDirectionMixin as Mixin,
  HowToSupplyMixin as Mixin,
  HowToToolMixin as Mixin,
  ListItemMixin as Mixin,
  MediaObjectMixin as Mixin];
