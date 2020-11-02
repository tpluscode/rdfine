import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { BoatReservationMixin } from '../BoatReservation';

export const BoatReservationBundle = [
  ReservationMixin as Mixin,
  BoatReservationMixin as Mixin];
