import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../Trip';
import { BoatTripMixin } from '../BoatTrip';
import { BoatTerminalMixin } from '../BoatTerminal';

export const BoatTripBundle = [
  TripMixin as Mixin,
  BoatTripMixin as Mixin,
  BoatTerminalMixin as Mixin];
