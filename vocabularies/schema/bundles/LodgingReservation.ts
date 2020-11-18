import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { LodgingReservationMixin } from '../lib/LodgingReservation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const LodgingReservationBundle = [
  ReservationMixin as Mixin,
  LodgingReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
