import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoleMixin } from '../Role';
import { PerformanceRoleMixin } from '../PerformanceRole';

export const PerformanceRoleDependencies = [
  RoleMixin as Mixin,
  PerformanceRoleMixin as Mixin];
