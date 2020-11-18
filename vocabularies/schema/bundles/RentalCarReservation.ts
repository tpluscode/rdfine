import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { RentalCarReservationMixin } from '../lib/RentalCarReservation';
import { PlaceMixin } from '../lib/Place';

export const RentalCarReservationBundle = [
  ReservationMixin as Mixin,
  RentalCarReservationMixin as Mixin,
  PlaceMixin as Mixin];
