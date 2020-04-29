import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { DepartmentStoreMixin } from '../DepartmentStore';

export const DepartmentStoreDependencies = [
  StoreMixin as Mixin,
  DepartmentStoreMixin as Mixin];
