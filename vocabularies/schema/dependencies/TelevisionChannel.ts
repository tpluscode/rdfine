import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../BroadcastChannel';
import { TelevisionChannelMixin } from '../TelevisionChannel';

export const TelevisionChannelDependencies = [
  BroadcastChannelMixin as Mixin,
  TelevisionChannelMixin as Mixin];
