import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../lib/AllocateAction';
import { AssignActionMixin } from '../lib/AssignAction';

export const AssignActionBundle = [
  AllocateActionMixin as Mixin,
  AssignActionMixin as Mixin];
