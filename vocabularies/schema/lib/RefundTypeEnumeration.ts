import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  ExchangeRefund: schema.ExchangeRefund as NamedNode<'http://schema.org/ExchangeRefund'>,
  FullRefund: schema.FullRefund as NamedNode<'http://schema.org/FullRefund'>,
  StoreCreditRefund: schema.StoreCreditRefund as NamedNode<'http://schema.org/StoreCreditRefund'>,
};

export type RefundTypeEnumeration =
  NamedNode<'http://schema.org/ExchangeRefund'>
  | NamedNode<'http://schema.org/FullRefund'>
  | NamedNode<'http://schema.org/StoreCreditRefund'>;
