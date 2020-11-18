import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../lib/BroadcastChannel';
import { RadioChannelMixin } from '../lib/RadioChannel';

export const RadioChannelBundle = [
  BroadcastChannelMixin as Mixin,
  RadioChannelMixin as Mixin];
