import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { EventReservationMixin } from '../EventReservation';

export const EventReservationDependencies = [
  ReservationMixin as Mixin,
  EventReservationMixin as Mixin];
