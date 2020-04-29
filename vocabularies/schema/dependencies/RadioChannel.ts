import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../BroadcastChannel';
import { RadioChannelMixin } from '../RadioChannel';

export const RadioChannelDependencies = [
  BroadcastChannelMixin as Mixin,
  RadioChannelMixin as Mixin];
