import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemListMixin } from '../lib/ItemList';
import { BreadcrumbListMixin } from '../lib/BreadcrumbList';

export const BreadcrumbListBundle = [
  ItemListMixin as Mixin,
  BreadcrumbListMixin as Mixin];
