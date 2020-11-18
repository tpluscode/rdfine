import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastServiceMixin } from '../lib/BroadcastService';
import { RadioBroadcastServiceMixin } from '../lib/RadioBroadcastService';

export const RadioBroadcastServiceBundle = [
  BroadcastServiceMixin as Mixin,
  RadioBroadcastServiceMixin as Mixin];
