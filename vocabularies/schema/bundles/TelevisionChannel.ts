import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../lib/BroadcastChannel';
import { TelevisionChannelMixin } from '../lib/TelevisionChannel';

export const TelevisionChannelBundle = [
  BroadcastChannelMixin as Mixin,
  TelevisionChannelMixin as Mixin];
