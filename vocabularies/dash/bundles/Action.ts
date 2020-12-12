import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ActionGroupMixin } from '../lib/ActionGroup';
import { ActionMixin } from '../lib/Action';

export const ActionBundle = [
  ScriptMixin as Mixin,
  ActionGroupMixin as Mixin,
  ActionMixin as Mixin];
