import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { RoleMixin } from '../Role';

export const RoleBundle = [
  IntangibleMixin as Mixin,
  RoleMixin as Mixin];
