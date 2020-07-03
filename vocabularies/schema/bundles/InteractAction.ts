import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { InteractActionMixin } from '../InteractAction';

export const InteractActionBundle = [
  ActionMixin as Mixin,
  InteractActionMixin as Mixin];
