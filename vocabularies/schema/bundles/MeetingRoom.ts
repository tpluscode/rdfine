import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoomMixin } from '../lib/Room';
import { MeetingRoomMixin } from '../lib/MeetingRoom';

export const MeetingRoomBundle = [
  RoomMixin as Mixin,
  MeetingRoomMixin as Mixin];
