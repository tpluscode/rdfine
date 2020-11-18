import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { BusReservationMixin } from '../lib/BusReservation';

export const BusReservationBundle = [
  ReservationMixin as Mixin,
  BusReservationMixin as Mixin];
