import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../lib/Role';
import { OrganizationRoleMixin } from '../lib/OrganizationRole';

export const OrganizationRoleBundle = [
  RoleMixin as Mixin,
  OrganizationRoleMixin as Mixin];
