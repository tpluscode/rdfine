import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AccommodationMixin } from './Accommodation.js';

export interface Room<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, rdfine.RdfResource<D> {
}

export function RoomMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Room & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RoomClass extends AccommodationMixin(Resource) {
  }
  return RoomClass as any
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
