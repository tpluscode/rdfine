import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { AssessActionMixin } from '../AssessAction';

export const AssessActionDependencies = [
  ActionMixin as Mixin,
  AssessActionMixin as Mixin];
