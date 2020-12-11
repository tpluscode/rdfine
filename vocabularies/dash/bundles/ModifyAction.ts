import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceActionMixin } from '../lib/ResourceAction';
import { ModifyActionMixin } from '../lib/ModifyAction';

export const ModifyActionBundle = [
  ResourceActionMixin as Mixin,
  ModifyActionMixin as Mixin];
