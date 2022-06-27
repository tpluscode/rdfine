import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ModifyActionMixin } from '../lib/ModifyAction';
import { ResourceActionMixin } from '../lib/ResourceAction';

export const ModifyActionBundle = [
  ModifyActionMixin as Mixin,
  ResourceActionMixin as Mixin];
