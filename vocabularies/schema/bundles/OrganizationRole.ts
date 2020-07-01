import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../Role';
import { OrganizationRoleMixin } from '../OrganizationRole';

export const OrganizationRoleBundle = [
  RoleMixin as Mixin,
  OrganizationRoleMixin as Mixin];
