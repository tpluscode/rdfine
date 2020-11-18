import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { DepartmentStoreMixin } from '../lib/DepartmentStore';

export const DepartmentStoreBundle = [
  StoreMixin as Mixin,
  DepartmentStoreMixin as Mixin];
