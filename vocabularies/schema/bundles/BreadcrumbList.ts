import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemListMixin } from '../ItemList';
import { BreadcrumbListMixin } from '../BreadcrumbList';

export const BreadcrumbListBundle = [
  ItemListMixin as Mixin,
  BreadcrumbListMixin as Mixin];
