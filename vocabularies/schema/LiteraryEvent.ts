import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface LiteraryEvent extends Schema.Event, RdfResource {
}

export default function LiteraryEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiteraryEventClass extends EventMixin(Resource) implements LiteraryEvent {
  }
  return LiteraryEventClass
}

class LiteraryEventImpl extends LiteraryEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LiteraryEvent>) {
    super(arg)
    this.types.add(schema.LiteraryEvent)
    initializeProperties<LiteraryEvent>(this, init)
  }
}
LiteraryEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LiteraryEvent)
LiteraryEventMixin.Class = LiteraryEventImpl
