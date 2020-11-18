import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { FlightReservationMixin } from '../lib/FlightReservation';

export const FlightReservationBundle = [
  ReservationMixin as Mixin,
  FlightReservationMixin as Mixin];
