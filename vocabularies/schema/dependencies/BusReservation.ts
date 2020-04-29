import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { BusReservationMixin } from '../BusReservation';

export const BusReservationDependencies = [
  ReservationMixin as Mixin,
  BusReservationMixin as Mixin];
