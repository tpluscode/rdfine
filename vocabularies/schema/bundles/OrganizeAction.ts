import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { OrganizeActionMixin } from '../lib/OrganizeAction';

export const OrganizeActionBundle = [
  ActionMixin as Mixin,
  OrganizeActionMixin as Mixin];
