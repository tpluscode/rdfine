import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HotelRoom)
  }
}
HotelRoomMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HotelRoom)
HotelRoomMixin.Class = HotelRoomImpl
