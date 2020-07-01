import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../BroadcastChannel';
import { TelevisionChannelMixin } from '../TelevisionChannel';

export const TelevisionChannelBundle = [
  BroadcastChannelMixin as Mixin,
  TelevisionChannelMixin as Mixin];
