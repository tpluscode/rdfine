import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type PaymentStatusType = NamedNode;

export default {
  PaymentAutomaticallyApplied: schema.PaymentAutomaticallyApplied,
  PaymentComplete: schema.PaymentComplete,
  PaymentDeclined: schema.PaymentDeclined,
  PaymentDue: schema.PaymentDue,
  PaymentPastDue: schema.PaymentPastDue,
};
