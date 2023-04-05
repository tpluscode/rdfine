import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventReservationMixin } from '../lib/EventReservation';
import { ReservationMixin } from '../lib/Reservation';

export const EventReservationBundle = [
  EventReservationMixin as Mixin,
  ReservationMixin as Mixin];
