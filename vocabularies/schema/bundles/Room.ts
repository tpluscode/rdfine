import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../lib/Accommodation';
import { RoomMixin } from '../lib/Room';

export const RoomBundle = [
  AccommodationMixin as Mixin,
  RoomMixin as Mixin];
