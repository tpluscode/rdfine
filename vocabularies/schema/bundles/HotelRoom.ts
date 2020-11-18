import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoomMixin } from '../lib/Room';
import { HotelRoomMixin } from '../lib/HotelRoom';
import { BedDetailsMixin } from '../lib/BedDetails';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const HotelRoomBundle = [
  RoomMixin as Mixin,
  HotelRoomMixin as Mixin,
  BedDetailsMixin as Mixin,
  QuantitativeValueMixin as Mixin];
