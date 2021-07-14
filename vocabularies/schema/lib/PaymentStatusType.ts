import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  PaymentAutomaticallyApplied: schema.PaymentAutomaticallyApplied,
  PaymentComplete: schema.PaymentComplete,
  PaymentDeclined: schema.PaymentDeclined,
  PaymentDue: schema.PaymentDue,
  PaymentPastDue: schema.PaymentPastDue,
};

export type PaymentStatusType = typeof values[keyof typeof values];

export default values;
