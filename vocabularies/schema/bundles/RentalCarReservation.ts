import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { RentalCarReservationMixin } from '../lib/RentalCarReservation';
import { ReservationMixin } from '../lib/Reservation';

export const RentalCarReservationBundle = [
  PlaceMixin as Mixin,
  RentalCarReservationMixin as Mixin,
  ReservationMixin as Mixin];
