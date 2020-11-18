import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ListItemMixin } from '../lib/ListItem';
import { HowToDirectionMixin } from '../lib/HowToDirection';
import { MediaObjectMixin } from '../lib/MediaObject';
import { DurationMixin } from '../lib/Duration';
import { HowToSupplyMixin } from '../lib/HowToSupply';
import { HowToToolMixin } from '../lib/HowToTool';

export const HowToDirectionBundle = [
  CreativeWorkMixin as Mixin,
  ListItemMixin as Mixin,
  HowToDirectionMixin as Mixin,
  MediaObjectMixin as Mixin,
  DurationMixin as Mixin,
  HowToSupplyMixin as Mixin,
  HowToToolMixin as Mixin];
