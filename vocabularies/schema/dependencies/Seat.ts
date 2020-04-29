import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { SeatMixin } from '../Seat';

export const SeatDependencies = [
  IntangibleMixin as Mixin,
  SeatMixin as Mixin];
