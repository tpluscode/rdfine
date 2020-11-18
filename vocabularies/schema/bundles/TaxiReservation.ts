import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReservationMixin } from '../lib/Reservation';
import { TaxiReservationMixin } from '../lib/TaxiReservation';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { PlaceMixin } from '../lib/Place';

export const TaxiReservationBundle = [
  ReservationMixin as Mixin,
  TaxiReservationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PlaceMixin as Mixin];
