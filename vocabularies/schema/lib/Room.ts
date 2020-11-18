import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AccommodationMixin } from './Accommodation';

export interface Room<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, RdfResource<D> {
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

  static readonly __mixins: Mixin[] = [RoomMixin, AccommodationMixin];
}
RoomMixin.appliesTo = schema.Room
RoomMixin.Class = RoomImpl
