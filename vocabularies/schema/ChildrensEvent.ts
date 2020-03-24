import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ChildrensEvent extends Schema.Event, RdfResource {
}

export default function ChildrensEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChildrensEventClass extends EventMixin(Resource) implements ChildrensEvent {
  }
  return ChildrensEventClass
}

class ChildrensEventImpl extends ChildrensEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ChildrensEvent>) {
    super(arg)
    this.types.add(schema.ChildrensEvent)
    initializeProperties(this, init)
  }
}
ChildrensEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChildrensEvent)
ChildrensEventMixin.Class = ChildrensEventImpl
