import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { UpdateActionMixin } from '../lib/UpdateAction';
import { ThingMixin } from '../lib/Thing';

export const UpdateActionBundle = [
  ActionMixin as Mixin,
  UpdateActionMixin as Mixin,
  ThingMixin as Mixin];
