import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizeActionMixin } from '../lib/OrganizeAction';
import { AllocateActionMixin } from '../lib/AllocateAction';

export const AllocateActionBundle = [
  OrganizeActionMixin as Mixin,
  AllocateActionMixin as Mixin];
