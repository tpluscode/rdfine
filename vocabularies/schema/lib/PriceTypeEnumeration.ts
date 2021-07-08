import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  InvoicePrice: schema.InvoicePrice as NamedNode<'http://schema.org/InvoicePrice'>,
  ListPrice: schema.ListPrice as NamedNode<'http://schema.org/ListPrice'>,
  MSRP: schema.MSRP as NamedNode<'http://schema.org/MSRP'>,
  MinimumAdvertisedPrice: schema.MinimumAdvertisedPrice as NamedNode<'http://schema.org/MinimumAdvertisedPrice'>,
  SRP: schema.SRP as NamedNode<'http://schema.org/SRP'>,
  SalePrice: schema.SalePrice as NamedNode<'http://schema.org/SalePrice'>,
};

export type PriceTypeEnumeration =
  NamedNode<'http://schema.org/InvoicePrice'>
  | NamedNode<'http://schema.org/ListPrice'>
  | NamedNode<'http://schema.org/MSRP'>
  | NamedNode<'http://schema.org/MinimumAdvertisedPrice'>
  | NamedNode<'http://schema.org/SRP'>
  | NamedNode<'http://schema.org/SalePrice'>;
