import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { SeatMixin } from '../Seat';

export const SeatBundle = [
  IntangibleMixin as Mixin,
  SeatMixin as Mixin];
