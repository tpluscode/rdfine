import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { ResourceActionMixin } from '../lib/ResourceAction';

export const ResourceActionBundle = [
  ActionMixin as Mixin,
  ResourceActionMixin as Mixin];
