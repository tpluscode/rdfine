import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../Accommodation';
import { RoomMixin } from '../Room';

export const RoomBundle = [
  AccommodationMixin as Mixin,
  RoomMixin as Mixin];
