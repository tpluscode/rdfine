import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BreadcrumbListMixin } from '../lib/BreadcrumbList';
import { ItemListMixin } from '../lib/ItemList';

export const BreadcrumbListBundle = [
  BreadcrumbListMixin as Mixin,
  ItemListMixin as Mixin];
