import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { RoomMixin } from './Room';

export interface MeetingRoom<ID extends ResourceNode = ResourceNode> extends Schema.Room<ID>, RdfResource<ID> {
}

export function MeetingRoomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MeetingRoomClass extends RoomMixin(Resource) implements MeetingRoom {
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
