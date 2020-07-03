import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../Role';
import { PerformanceRoleMixin } from '../PerformanceRole';

export const PerformanceRoleBundle = [
  RoleMixin as Mixin,
  PerformanceRoleMixin as Mixin];
