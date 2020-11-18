import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  OriginalShippingFees: schema.OriginalShippingFees as NamedNode<'http://schema.org/OriginalShippingFees'>,
  RestockingFees: schema.RestockingFees as NamedNode<'http://schema.org/RestockingFees'>,
  ReturnShippingFees: schema.ReturnShippingFees as NamedNode<'http://schema.org/ReturnShippingFees'>,
};

export type ReturnFeesEnumeration = 
  NamedNode<'http://schema.org/OriginalShippingFees'>
  | NamedNode<'http://schema.org/RestockingFees'>
  | NamedNode<'http://schema.org/ReturnShippingFees'>;
