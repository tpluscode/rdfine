import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../BroadcastChannel';
import { RadioChannelMixin } from '../RadioChannel';

export const RadioChannelBundle = [
  BroadcastChannelMixin as Mixin,
  RadioChannelMixin as Mixin];
