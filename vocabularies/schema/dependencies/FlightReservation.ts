import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { FlightReservationMixin } from '../FlightReservation';

export const FlightReservationDependencies = [
  ReservationMixin as Mixin,
  FlightReservationMixin as Mixin];
