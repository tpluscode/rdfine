import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MusicEvent>) {
    super(arg)
    this.types.add(schema.MusicEvent)
    initializeProperties(this, init)
  }
}
MusicEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicEvent)
MusicEventMixin.Class = MusicEventImpl
