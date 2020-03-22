import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type ItemListOrderType = NamedNode;

export default {
  ItemListOrderAscending: schema.ItemListOrderAscending,
  ItemListOrderDescending: schema.ItemListOrderDescending,
  ItemListUnordered: schema.ItemListUnordered,
};
