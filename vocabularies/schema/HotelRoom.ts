import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import RoomMixin from './Room';

export interface HotelRoom extends Schema.Room, RdfResource {
  bed: Schema.BedDetails | Schema.BedType;
  bedLiteral: string;
  occupancy: Schema.QuantitativeValue;
}

export default function HotelRoomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HotelRoomClass extends RoomMixin(Resource) implements HotelRoom {
    @property.resource()
    bed!: Schema.BedDetails | Schema.BedType;
    @property.literal({ path: schema.bed })
    bedLiteral!: string;
    @property.resource()
    occupancy!: Schema.QuantitativeValue;
  }
  return HotelRoomClass
}

class HotelRoomImpl extends HotelRoomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HotelRoom>) {
    super(arg)
    this.types.add(schema.HotelRoom)
    initializeProperties(this, init)
  }
}
HotelRoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HotelRoom)
HotelRoomMixin.Class = HotelRoomImpl
