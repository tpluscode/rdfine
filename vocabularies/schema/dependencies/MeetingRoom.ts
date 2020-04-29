import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RoomMixin } from '../Room';
import { MeetingRoomMixin } from '../MeetingRoom';

export const MeetingRoomDependencies = [
  RoomMixin as Mixin,
  MeetingRoomMixin as Mixin];
