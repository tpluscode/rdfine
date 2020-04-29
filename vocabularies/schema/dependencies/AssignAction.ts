import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../AllocateAction';
import { AssignActionMixin } from '../AssignAction';

export const AssignActionDependencies = [
  AllocateActionMixin as Mixin,
  AssignActionMixin as Mixin];
