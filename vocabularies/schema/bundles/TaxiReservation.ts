import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ReservationMixin } from '../lib/Reservation';
import { TaxiReservationMixin } from '../lib/TaxiReservation';

export const TaxiReservationBundle = [
  PlaceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ReservationMixin as Mixin,
  TaxiReservationMixin as Mixin];
