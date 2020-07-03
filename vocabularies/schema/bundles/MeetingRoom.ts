import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoomMixin } from '../Room';
import { MeetingRoomMixin } from '../MeetingRoom';

export const MeetingRoomBundle = [
  RoomMixin as Mixin,
  MeetingRoomMixin as Mixin];
