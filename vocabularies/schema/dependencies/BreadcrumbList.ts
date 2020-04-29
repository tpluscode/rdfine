import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ItemListMixin } from '../ItemList';
import { BreadcrumbListMixin } from '../BreadcrumbList';

export const BreadcrumbListDependencies = [
  ItemListMixin as Mixin,
  BreadcrumbListMixin as Mixin];
