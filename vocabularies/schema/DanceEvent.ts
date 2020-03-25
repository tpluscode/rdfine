import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface DanceEvent extends Schema.Event, RdfResource {
}

export default function DanceEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DanceEventClass extends EventMixin(Resource) implements DanceEvent {
  }
  return DanceEventClass
}

class DanceEventImpl extends DanceEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DanceEvent>) {
    super(arg)
    this.types.add(schema.DanceEvent)
    initializeProperties<DanceEvent>(this, init)
  }
}
DanceEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DanceEvent)
DanceEventMixin.Class = DanceEventImpl
