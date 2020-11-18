import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../lib/Role';
import { PerformanceRoleMixin } from '../lib/PerformanceRole';

export const PerformanceRoleBundle = [
  RoleMixin as Mixin,
  PerformanceRoleMixin as Mixin];
