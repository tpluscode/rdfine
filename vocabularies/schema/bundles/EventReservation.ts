import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { EventReservationMixin } from '../lib/EventReservation';

export const EventReservationBundle = [
  ReservationMixin as Mixin,
  EventReservationMixin as Mixin];
