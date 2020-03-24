import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import RoomMixin from './Room';

export interface MeetingRoom extends Schema.Room, RdfResource {
}

export default function MeetingRoomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MeetingRoomClass extends RoomMixin(Resource) implements MeetingRoom {
  }
  return MeetingRoomClass
}

class MeetingRoomImpl extends MeetingRoomMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MeetingRoom)
  }
}
MeetingRoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MeetingRoom)
MeetingRoomMixin.Class = MeetingRoomImpl
