import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  PaymentAutomaticallyApplied: schema.PaymentAutomaticallyApplied as NamedNode<'http://schema.org/PaymentAutomaticallyApplied'>,
  PaymentComplete: schema.PaymentComplete as NamedNode<'http://schema.org/PaymentComplete'>,
  PaymentDeclined: schema.PaymentDeclined as NamedNode<'http://schema.org/PaymentDeclined'>,
  PaymentDue: schema.PaymentDue as NamedNode<'http://schema.org/PaymentDue'>,
  PaymentPastDue: schema.PaymentPastDue as NamedNode<'http://schema.org/PaymentPastDue'>,
};

export type PaymentStatusType =
  NamedNode<'http://schema.org/PaymentAutomaticallyApplied'>
  | NamedNode<'http://schema.org/PaymentComplete'>
  | NamedNode<'http://schema.org/PaymentDeclined'>
  | NamedNode<'http://schema.org/PaymentDue'>
  | NamedNode<'http://schema.org/PaymentPastDue'>;
