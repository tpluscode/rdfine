import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Room>) {
    super(arg)
    this.types.add(schema.Room)
    initializeProperties<Room>(this, init)
  }
}
RoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Room)
RoomMixin.Class = RoomImpl
