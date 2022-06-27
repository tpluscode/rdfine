import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BusReservationMixin } from '../lib/BusReservation';
import { ReservationMixin } from '../lib/Reservation';

export const BusReservationBundle = [
  BusReservationMixin as Mixin,
  ReservationMixin as Mixin];
