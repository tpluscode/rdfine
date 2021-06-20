import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  ReservationCancelled: schema.ReservationCancelled as NamedNode<'http://schema.org/ReservationCancelled'>,
  ReservationConfirmed: schema.ReservationConfirmed as NamedNode<'http://schema.org/ReservationConfirmed'>,
  ReservationHold: schema.ReservationHold as NamedNode<'http://schema.org/ReservationHold'>,
  ReservationPending: schema.ReservationPending as NamedNode<'http://schema.org/ReservationPending'>,
};

export type ReservationStatusType =
  NamedNode<'http://schema.org/ReservationCancelled'>
  | NamedNode<'http://schema.org/ReservationConfirmed'>
  | NamedNode<'http://schema.org/ReservationHold'>
  | NamedNode<'http://schema.org/ReservationPending'>;
