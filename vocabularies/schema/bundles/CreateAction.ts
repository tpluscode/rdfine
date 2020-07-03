import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { CreateActionMixin } from '../CreateAction';

export const CreateActionBundle = [
  ActionMixin as Mixin,
  CreateActionMixin as Mixin];
