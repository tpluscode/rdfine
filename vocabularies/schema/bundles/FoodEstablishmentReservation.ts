import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentReservationMixin } from '../lib/FoodEstablishmentReservation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ReservationMixin } from '../lib/Reservation';

export const FoodEstablishmentReservationBundle = [
  FoodEstablishmentReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ReservationMixin as Mixin];
