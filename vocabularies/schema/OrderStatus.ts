import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type OrderStatus = NamedNode;

export default {
  OrderCancelled: schema.OrderCancelled,
  OrderDelivered: schema.OrderDelivered,
  OrderInTransit: schema.OrderInTransit,
  OrderPaymentDue: schema.OrderPaymentDue,
  OrderPickupAvailable: schema.OrderPickupAvailable,
  OrderProblem: schema.OrderProblem,
  OrderProcessing: schema.OrderProcessing,
  OrderReturned: schema.OrderReturned,
};
