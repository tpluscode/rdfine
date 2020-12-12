import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  OrderCancelled: schema.OrderCancelled as NamedNode<'http://schema.org/OrderCancelled'>,
  OrderDelivered: schema.OrderDelivered as NamedNode<'http://schema.org/OrderDelivered'>,
  OrderInTransit: schema.OrderInTransit as NamedNode<'http://schema.org/OrderInTransit'>,
  OrderPaymentDue: schema.OrderPaymentDue as NamedNode<'http://schema.org/OrderPaymentDue'>,
  OrderPickupAvailable: schema.OrderPickupAvailable as NamedNode<'http://schema.org/OrderPickupAvailable'>,
  OrderProblem: schema.OrderProblem as NamedNode<'http://schema.org/OrderProblem'>,
  OrderProcessing: schema.OrderProcessing as NamedNode<'http://schema.org/OrderProcessing'>,
  OrderReturned: schema.OrderReturned as NamedNode<'http://schema.org/OrderReturned'>,
};

export type OrderStatus =
  NamedNode<'http://schema.org/OrderCancelled'>
  | NamedNode<'http://schema.org/OrderDelivered'>
  | NamedNode<'http://schema.org/OrderInTransit'>
  | NamedNode<'http://schema.org/OrderPaymentDue'>
  | NamedNode<'http://schema.org/OrderPickupAvailable'>
  | NamedNode<'http://schema.org/OrderProblem'>
  | NamedNode<'http://schema.org/OrderProcessing'>
  | NamedNode<'http://schema.org/OrderReturned'>;
