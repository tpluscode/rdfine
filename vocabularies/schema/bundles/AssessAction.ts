import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { AssessActionMixin } from '../lib/AssessAction';

export const AssessActionBundle = [
  ActionMixin as Mixin,
  AssessActionMixin as Mixin];
