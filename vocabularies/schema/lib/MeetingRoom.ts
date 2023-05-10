import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RoomMixin } from './Room.js';

export interface MeetingRoom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Room<D>, rdfine.RdfResource<D> {
}

export function MeetingRoomMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MeetingRoom> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MeetingRoomClass extends RoomMixin(Resource) implements Partial<MeetingRoom> {
  }
  return MeetingRoomClass
}

class MeetingRoomImpl extends MeetingRoomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MeetingRoom>) {
    super(arg, init)
    this.types.add(schema.MeetingRoom)
  }

  static readonly __mixins: Mixin[] = [MeetingRoomMixin, RoomMixin];
}
MeetingRoomMixin.appliesTo = schema.MeetingRoom
MeetingRoomMixin.Class = MeetingRoomImpl

export const fromPointer = createFactory<MeetingRoom>([RoomMixin, MeetingRoomMixin], { types: [schema.MeetingRoom] });
