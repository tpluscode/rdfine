import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AccommodationMixin } from './Accommodation.js';

export interface Room<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, RdfResource<D> {
}

export function RoomMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Room> & RdfResourceCore> & Base {
  @namespace(schema)
  class RoomClass extends AccommodationMixin(Resource) implements Partial<Room> {
  }
  return RoomClass
}

class RoomImpl extends RoomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Room>) {
    super(arg, init)
    this.types.add(schema.Room)
  }

  static readonly __mixins: Mixin[] = [RoomMixin, AccommodationMixin];
}
RoomMixin.appliesTo = schema.Room
RoomMixin.Class = RoomImpl

export const fromPointer = createFactory<Room>([AccommodationMixin, RoomMixin], { types: [schema.Room] });
