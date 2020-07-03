import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsumeActionMixin } from '../ConsumeAction';
import { WatchActionMixin } from '../WatchAction';

export const WatchActionBundle = [
  ConsumeActionMixin as Mixin,
  WatchActionMixin as Mixin];
