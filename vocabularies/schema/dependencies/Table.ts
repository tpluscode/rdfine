import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { TableMixin } from '../Table';

export const TableDependencies = [
  WebPageElementMixin as Mixin,
  TableMixin as Mixin];
