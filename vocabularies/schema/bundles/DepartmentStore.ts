import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { DepartmentStoreMixin } from '../DepartmentStore';

export const DepartmentStoreBundle = [
  StoreMixin as Mixin,
  DepartmentStoreMixin as Mixin];
