import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { SolveMathActionMixin } from '../lib/SolveMathAction';

export const SolveMathActionBundle = [
  ActionMixin as Mixin,
  SolveMathActionMixin as Mixin];
