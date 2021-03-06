import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { RoomMixin } from './Room';

export interface HotelRoom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Room<D>, RdfResource<D> {
  bed: Schema.BedDetails<D> | undefined;
  bedLiteral: string | undefined;
  occupancy: Schema.QuantitativeValue<D> | undefined;
}

export function HotelRoomMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HotelRoom> & RdfResourceCore> & Base {
  @namespace(schema)
  class HotelRoomClass extends RoomMixin(Resource) implements Partial<HotelRoom> {
    @property.resource()
    bed: Schema.BedDetails | undefined;
    @property.literal({ path: schema.bed })
    bedLiteral: string | undefined;
    @property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
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

export const fromPointer = createFactory<HotelRoom>([RoomMixin, HotelRoomMixin], { types: [schema.HotelRoom] });
