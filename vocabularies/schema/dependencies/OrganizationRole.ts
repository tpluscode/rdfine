import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../Role';
import { OrganizationRoleMixin } from '../OrganizationRole';

export const OrganizationRoleDependencies = [
  RoleMixin as Mixin,
  OrganizationRoleMixin as Mixin];
