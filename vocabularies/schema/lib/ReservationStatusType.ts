import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  ReservationCancelled: schema.ReservationCancelled,
  ReservationConfirmed: schema.ReservationConfirmed,
  ReservationHold: schema.ReservationHold,
  ReservationPending: schema.ReservationPending,
};

export type ReservationStatusType = typeof values[keyof typeof values];

export default values;
