import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { SubscribeActionMixin } from '../lib/SubscribeAction';

export const SubscribeActionBundle = [
  InteractActionMixin as Mixin,
  SubscribeActionMixin as Mixin];
