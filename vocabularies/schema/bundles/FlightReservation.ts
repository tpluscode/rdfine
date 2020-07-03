import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { FlightReservationMixin } from '../FlightReservation';

export const FlightReservationBundle = [
  ReservationMixin as Mixin,
  FlightReservationMixin as Mixin];
