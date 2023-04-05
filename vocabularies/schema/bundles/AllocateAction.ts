import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AllocateActionMixin } from '../lib/AllocateAction';
import { OrganizeActionMixin } from '../lib/OrganizeAction';

export const AllocateActionBundle = [
  AllocateActionMixin as Mixin,
  OrganizeActionMixin as Mixin];
