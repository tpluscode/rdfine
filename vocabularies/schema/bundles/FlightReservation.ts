import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FlightReservationMixin } from '../lib/FlightReservation';
import { ReservationMixin } from '../lib/Reservation';

export const FlightReservationBundle = [
  FlightReservationMixin as Mixin,
  ReservationMixin as Mixin];
