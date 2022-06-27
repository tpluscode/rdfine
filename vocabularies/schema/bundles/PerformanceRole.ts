import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PerformanceRoleMixin } from '../lib/PerformanceRole';
import { RoleMixin } from '../lib/Role';

export const PerformanceRoleBundle = [
  PerformanceRoleMixin as Mixin,
  RoleMixin as Mixin];
