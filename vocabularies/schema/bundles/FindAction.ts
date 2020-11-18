import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { FindActionMixin } from '../lib/FindAction';

export const FindActionBundle = [
  ActionMixin as Mixin,
  FindActionMixin as Mixin];
