import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { FoodEstablishmentReservationMixin } from '../FoodEstablishmentReservation';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const FoodEstablishmentReservationDependencies = [
  ReservationMixin as Mixin,
  FoodEstablishmentReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin];
