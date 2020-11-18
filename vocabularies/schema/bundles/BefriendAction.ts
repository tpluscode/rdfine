import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InteractActionMixin } from '../lib/InteractAction';
import { BefriendActionMixin } from '../lib/BefriendAction';

export const BefriendActionBundle = [
  InteractActionMixin as Mixin,
  BefriendActionMixin as Mixin];
