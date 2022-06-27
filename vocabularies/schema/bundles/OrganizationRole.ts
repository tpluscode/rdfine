import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationRoleMixin } from '../lib/OrganizationRole';
import { RoleMixin } from '../lib/Role';

export const OrganizationRoleBundle = [
  OrganizationRoleMixin as Mixin,
  RoleMixin as Mixin];
