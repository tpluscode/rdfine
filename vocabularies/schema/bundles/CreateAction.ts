import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { CreateActionMixin } from '../lib/CreateAction';

export const CreateActionBundle = [
  ActionMixin as Mixin,
  CreateActionMixin as Mixin];
