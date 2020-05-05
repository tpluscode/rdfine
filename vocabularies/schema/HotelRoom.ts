import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { RoomMixin } from './Room';

export interface HotelRoom extends Schema.Room, RdfResource {
  bed: Schema.BedDetails;
  bedLiteral: string;
  occupancy: Schema.QuantitativeValue;
}

export function HotelRoomMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [HotelRoomMixin, RoomMixin];
}
HotelRoomMixin.appliesTo = schema.HotelRoom
HotelRoomMixin.Class = HotelRoomImpl
