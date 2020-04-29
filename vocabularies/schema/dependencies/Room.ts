import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccommodationMixin } from '../Accommodation';
import { RoomMixin } from '../Room';

export const RoomDependencies = [
  AccommodationMixin as Mixin,
  RoomMixin as Mixin];
