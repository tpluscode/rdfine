import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../Reservation';
import { TaxiReservationMixin } from '../TaxiReservation';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { PlaceMixin } from '../Place';

export const TaxiReservationDependencies = [
  ReservationMixin as Mixin,
  TaxiReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PlaceMixin as Mixin];
