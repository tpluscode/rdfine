import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { SubscribeActionMixin } from '../SubscribeAction';

export const SubscribeActionBundle = [
  InteractActionMixin as Mixin,
  SubscribeActionMixin as Mixin];
