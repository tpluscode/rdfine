import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BoatTerminalMixin } from '../lib/BoatTerminal';
import { BoatTripMixin } from '../lib/BoatTrip';
import { TripMixin } from '../lib/Trip';

export const BoatTripBundle = [
  BoatTerminalMixin as Mixin,
  BoatTripMixin as Mixin,
  TripMixin as Mixin];
