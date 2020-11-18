import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { InteractActionMixin } from '../lib/InteractAction';

export const InteractActionBundle = [
  ActionMixin as Mixin,
  InteractActionMixin as Mixin];
