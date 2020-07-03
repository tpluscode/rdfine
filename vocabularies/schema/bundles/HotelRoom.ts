import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoomMixin } from '../Room';
import { HotelRoomMixin } from '../HotelRoom';
import { BedDetailsMixin } from '../BedDetails';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const HotelRoomBundle = [
  RoomMixin as Mixin,
  HotelRoomMixin as Mixin,
  BedDetailsMixin as Mixin,
  QuantitativeValueMixin as Mixin];
