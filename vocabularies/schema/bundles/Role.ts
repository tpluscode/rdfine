import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { RoleMixin } from '../lib/Role';

export const RoleBundle = [
  IntangibleMixin as Mixin,
  RoleMixin as Mixin];
