import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LodgingReservationMixin } from '../lib/LodgingReservation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ReservationMixin } from '../lib/Reservation';

export const LodgingReservationBundle = [
  LodgingReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ReservationMixin as Mixin];
