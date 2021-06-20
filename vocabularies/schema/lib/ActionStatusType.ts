import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  ActiveActionStatus: schema.ActiveActionStatus as NamedNode<'http://schema.org/ActiveActionStatus'>,
  CompletedActionStatus: schema.CompletedActionStatus as NamedNode<'http://schema.org/CompletedActionStatus'>,
  FailedActionStatus: schema.FailedActionStatus as NamedNode<'http://schema.org/FailedActionStatus'>,
  PotentialActionStatus: schema.PotentialActionStatus as NamedNode<'http://schema.org/PotentialActionStatus'>,
};

export type ActionStatusType =
  NamedNode<'http://schema.org/ActiveActionStatus'>
  | NamedNode<'http://schema.org/CompletedActionStatus'>
  | NamedNode<'http://schema.org/FailedActionStatus'>
  | NamedNode<'http://schema.org/PotentialActionStatus'>;
