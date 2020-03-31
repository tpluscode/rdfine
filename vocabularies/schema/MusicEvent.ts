import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface MusicEvent extends Schema.Event, RdfResource {
}

export default function MusicEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicEventClass extends EventMixin(Resource) implements MusicEvent {
  }
  return MusicEventClass
}

class MusicEventImpl extends MusicEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicEvent>) {
    super(arg, init)
    this.types.add(schema.MusicEvent)
  }
}
MusicEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicEvent)
MusicEventMixin.Class = MusicEventImpl
