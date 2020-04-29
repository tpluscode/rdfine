import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { LodgingReservationMixin } from '../LodgingReservation';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const LodgingReservationDependencies = [
  ReservationMixin as Mixin,
  LodgingReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
