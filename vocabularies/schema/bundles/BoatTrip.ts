import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TripMixin } from '../lib/Trip';
import { BoatTripMixin } from '../lib/BoatTrip';
import { BoatTerminalMixin } from '../lib/BoatTerminal';

export const BoatTripBundle = [
  TripMixin as Mixin,
  BoatTripMixin as Mixin,
  BoatTerminalMixin as Mixin];
