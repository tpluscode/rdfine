import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MeetingRoomMixin } from '../lib/MeetingRoom';
import { RoomMixin } from '../lib/Room';

export const MeetingRoomBundle = [
  MeetingRoomMixin as Mixin,
  RoomMixin as Mixin];
