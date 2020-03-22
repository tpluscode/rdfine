import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AccommodationMixin from './Accommodation';

export interface Room extends Schema.Accommodation, RdfResource {
}

export default function RoomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoomClass extends AccommodationMixin(Resource) implements Room {
  }
  return RoomClass
}

class RoomImpl extends RoomMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Room)
  }
}
RoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Room)
RoomMixin.Class = RoomImpl
