import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BefriendActionMixin } from '../lib/BefriendAction';
import { InteractActionMixin } from '../lib/InteractAction';

export const BefriendActionBundle = [
  BefriendActionMixin as Mixin,
  InteractActionMixin as Mixin];
