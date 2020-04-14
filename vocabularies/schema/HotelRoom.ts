import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import RoomMixin from './Room';

export interface HotelRoom extends Schema.Room, RdfResource {
  bed: Schema.BedDetails;
  bedLiteral: string;
  occupancy: Schema.QuantitativeValue;
}

export default function HotelRoomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HotelRoomClass extends RoomMixin(Resource) implements HotelRoom {
    @property.resource()
    bed!: Schema.BedDetails;
    @property.literal({ path: schema.bed })
    bedLiteral!: string;
    @property.resource()
    occupancy!: Schema.QuantitativeValue;
  }
  return HotelRoomClass
}

class HotelRoomImpl extends HotelRoomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HotelRoom>) {
    super(arg, init)
    this.types.add(schema.HotelRoom)
  }
}
HotelRoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HotelRoom)
HotelRoomMixin.Class = HotelRoomImpl
