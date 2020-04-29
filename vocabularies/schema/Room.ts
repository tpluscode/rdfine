import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { AccommodationMixin } from './Accommodation';

export interface Room extends Schema.Accommodation, RdfResource {
}

export function RoomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoomClass extends AccommodationMixin(Resource) implements Room {
  }
  return RoomClass
}

class RoomImpl extends RoomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Room>) {
    super(arg, init)
    this.types.add(schema.Room)
  }
}
RoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Room)
RoomMixin.Class = RoomImpl
