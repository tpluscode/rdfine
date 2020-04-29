import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { RentalCarReservationMixin } from '../RentalCarReservation';
import { PlaceMixin } from '../Place';

export const RentalCarReservationDependencies = [
  ReservationMixin as Mixin,
  RentalCarReservationMixin as Mixin,
  PlaceMixin as Mixin];
