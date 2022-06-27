import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TableMixin } from '../lib/Table';
import { WebPageElementMixin } from '../lib/WebPageElement';

export const TableBundle = [
  TableMixin as Mixin,
  WebPageElementMixin as Mixin];
