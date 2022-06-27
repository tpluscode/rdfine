import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BedDetailsMixin } from '../lib/BedDetails';
import { HotelRoomMixin } from '../lib/HotelRoom';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { RoomMixin } from '../lib/Room';

export const HotelRoomBundle = [
  BedDetailsMixin as Mixin,
  HotelRoomMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  RoomMixin as Mixin];
