import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type ActionStatusType = NamedNode;

export default {
  ActiveActionStatus: schema.ActiveActionStatus,
  CompletedActionStatus: schema.CompletedActionStatus,
  FailedActionStatus: schema.FailedActionStatus,
  PotentialActionStatus: schema.PotentialActionStatus,
};
