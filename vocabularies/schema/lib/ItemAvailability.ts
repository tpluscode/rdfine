import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  Discontinued: schema.Discontinued as NamedNode<'http://schema.org/Discontinued'>,
  InStock: schema.InStock as NamedNode<'http://schema.org/InStock'>,
  InStoreOnly: schema.InStoreOnly as NamedNode<'http://schema.org/InStoreOnly'>,
  LimitedAvailability: schema.LimitedAvailability as NamedNode<'http://schema.org/LimitedAvailability'>,
  OnlineOnly: schema.OnlineOnly as NamedNode<'http://schema.org/OnlineOnly'>,
  OutOfStock: schema.OutOfStock as NamedNode<'http://schema.org/OutOfStock'>,
  PreOrder: schema.PreOrder as NamedNode<'http://schema.org/PreOrder'>,
  PreSale: schema.PreSale as NamedNode<'http://schema.org/PreSale'>,
  SoldOut: schema.SoldOut as NamedNode<'http://schema.org/SoldOut'>,
};

export type ItemAvailability =
  NamedNode<'http://schema.org/Discontinued'>
  | NamedNode<'http://schema.org/InStock'>
  | NamedNode<'http://schema.org/InStoreOnly'>
  | NamedNode<'http://schema.org/LimitedAvailability'>
  | NamedNode<'http://schema.org/OnlineOnly'>
  | NamedNode<'http://schema.org/OutOfStock'>
  | NamedNode<'http://schema.org/PreOrder'>
  | NamedNode<'http://schema.org/PreSale'>
  | NamedNode<'http://schema.org/SoldOut'>;
