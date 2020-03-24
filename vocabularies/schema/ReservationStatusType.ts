import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type ReservationStatusType = NamedNode;

export default {
  ReservationCancelled: schema.ReservationCancelled,
  ReservationConfirmed: schema.ReservationConfirmed,
  ReservationHold: schema.ReservationHold,
  ReservationPending: schema.ReservationPending,
};
