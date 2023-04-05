import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { ThingMixin } from '../lib/Thing';
import { UpdateActionMixin } from '../lib/UpdateAction';

export const UpdateActionBundle = [
  ActionMixin as Mixin,
  ThingMixin as Mixin,
  UpdateActionMixin as Mixin];
