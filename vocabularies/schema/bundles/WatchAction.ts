import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../lib/ConsumeAction';
import { WatchActionMixin } from '../lib/WatchAction';

export const WatchActionBundle = [
  ConsumeActionMixin as Mixin,
  WatchActionMixin as Mixin];
