import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DepartmentStoreMixin } from '../lib/DepartmentStore';
import { StoreMixin } from '../lib/Store';

export const DepartmentStoreBundle = [
  DepartmentStoreMixin as Mixin,
  StoreMixin as Mixin];
