import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { SeatMixin } from '../lib/Seat';

export const SeatBundle = [
  IntangibleMixin as Mixin,
  SeatMixin as Mixin];
