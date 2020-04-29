import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { CreateActionMixin } from '../CreateAction';

export const CreateActionDependencies = [
  ActionMixin as Mixin,
  CreateActionMixin as Mixin];
