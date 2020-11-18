import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { TableMixin } from '../lib/Table';

export const TableBundle = [
  WebPageElementMixin as Mixin,
  TableMixin as Mixin];
