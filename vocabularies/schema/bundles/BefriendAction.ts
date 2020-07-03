import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../InteractAction';
import { BefriendActionMixin } from '../BefriendAction';

export const BefriendActionBundle = [
  InteractActionMixin as Mixin,
  BefriendActionMixin as Mixin];
