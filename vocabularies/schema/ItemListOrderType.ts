import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  ItemListOrderAscending: schema.ItemListOrderAscending as NamedNode<'http://schema.org/ItemListOrderAscending'>,
  ItemListOrderDescending: schema.ItemListOrderDescending as NamedNode<'http://schema.org/ItemListOrderDescending'>,
  ItemListUnordered: schema.ItemListUnordered as NamedNode<'http://schema.org/ItemListUnordered'>,
};

export type ItemListOrderType =
  NamedNode<'http://schema.org/ItemListOrderAscending'>
  | NamedNode<'http://schema.org/ItemListOrderDescending'>
  | NamedNode<'http://schema.org/ItemListUnordered'>;
