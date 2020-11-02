import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../Role';
import { LinkRoleMixin } from '../LinkRole';
import { LanguageMixin } from '../Language';

export const LinkRoleBundle = [
  RoleMixin as Mixin,
  LinkRoleMixin as Mixin,
  LanguageMixin as Mixin];
