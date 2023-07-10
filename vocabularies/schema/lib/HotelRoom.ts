import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RoomMixin } from './Room.js';

export interface HotelRoom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Room<D>, rdfine.RdfResource<D> {
  bed: Schema.BedDetails<D> | undefined;
  bedLiteral: string | undefined;
  occupancy: Schema.QuantitativeValue<D> | undefined;
}

export function HotelRoomMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HotelRoom & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HotelRoomClass extends RoomMixin(Resource) {
    @rdfine.property.resource()
    bed: Schema.BedDetails | undefined;
    @rdfine.property.literal({ path: schema.bed })
    bedLiteral: string | undefined;
    @rdfine.property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
  }
  return HotelRoomClass as any
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

export const fromPointer = createFactory<HotelRoom>([RoomMixin, HotelRoomMixin], { types: [schema.HotelRoom] });
