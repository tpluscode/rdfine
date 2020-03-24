import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type ItemAvailability = NamedNode;

export default {
  Discontinued: schema.Discontinued,
  InStock: schema.InStock,
  InStoreOnly: schema.InStoreOnly,
  LimitedAvailability: schema.LimitedAvailability,
  OnlineOnly: schema.OnlineOnly,
  OutOfStock: schema.OutOfStock,
  PreOrder: schema.PreOrder,
  PreSale: schema.PreSale,
  SoldOut: schema.SoldOut,
};
