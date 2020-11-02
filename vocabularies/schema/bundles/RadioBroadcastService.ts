import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastServiceMixin } from '../BroadcastService';
import { RadioBroadcastServiceMixin } from '../RadioBroadcastService';

export const RadioBroadcastServiceBundle = [
  BroadcastServiceMixin as Mixin,
  RadioBroadcastServiceMixin as Mixin];
