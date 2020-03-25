import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MeetingRoom>) {
    super(arg)
    this.types.add(schema.MeetingRoom)
    initializeProperties<MeetingRoom>(this, init)
  }
}
MeetingRoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MeetingRoom)
MeetingRoomMixin.Class = MeetingRoomImpl
