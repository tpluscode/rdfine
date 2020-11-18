import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { FoodEstablishmentReservationMixin } from '../lib/FoodEstablishmentReservation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const FoodEstablishmentReservationBundle = [
  ReservationMixin as Mixin,
  FoodEstablishmentReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
