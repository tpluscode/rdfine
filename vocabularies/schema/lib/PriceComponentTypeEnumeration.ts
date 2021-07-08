import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  ActivationFee: schema.ActivationFee as NamedNode<'http://schema.org/ActivationFee'>,
  CleaningFee: schema.CleaningFee as NamedNode<'http://schema.org/CleaningFee'>,
  DistanceFee: schema.DistanceFee as NamedNode<'http://schema.org/DistanceFee'>,
  Downpayment: schema.Downpayment as NamedNode<'http://schema.org/Downpayment'>,
  Installment: schema.Installment as NamedNode<'http://schema.org/Installment'>,
  Subscription: schema.Subscription as NamedNode<'http://schema.org/Subscription'>,
};

export type PriceComponentTypeEnumeration =
  NamedNode<'http://schema.org/ActivationFee'>
  | NamedNode<'http://schema.org/CleaningFee'>
  | NamedNode<'http://schema.org/DistanceFee'>
  | NamedNode<'http://schema.org/Downpayment'>
  | NamedNode<'http://schema.org/Installment'>
  | NamedNode<'http://schema.org/Subscription'>;
