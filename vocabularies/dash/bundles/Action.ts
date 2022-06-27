import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionGroupMixin } from '../lib/ActionGroup';
import { ActionMixin } from '../lib/Action';
import { ScriptMixin } from '../lib/Script';

export const ActionBundle = [
  ActionGroupMixin as Mixin,
  ActionMixin as Mixin,
  ScriptMixin as Mixin];
