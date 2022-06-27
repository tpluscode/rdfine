import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LanguageMixin } from '../lib/Language';
import { LinkRoleMixin } from '../lib/LinkRole';
import { RoleMixin } from '../lib/Role';

export const LinkRoleBundle = [
  LanguageMixin as Mixin,
  LinkRoleMixin as Mixin,
  RoleMixin as Mixin];
