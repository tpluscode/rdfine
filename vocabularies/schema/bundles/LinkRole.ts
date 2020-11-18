import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../lib/Role';
import { LinkRoleMixin } from '../lib/LinkRole';
import { LanguageMixin } from '../lib/Language';

export const LinkRoleBundle = [
  RoleMixin as Mixin,
  LinkRoleMixin as Mixin,
  LanguageMixin as Mixin];
