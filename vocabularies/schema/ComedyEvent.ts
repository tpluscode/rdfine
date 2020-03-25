import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ComedyEvent extends Schema.Event, RdfResource {
}

export default function ComedyEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComedyEventClass extends EventMixin(Resource) implements ComedyEvent {
  }
  return ComedyEventClass
}

class ComedyEventImpl extends ComedyEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ComedyEvent>) {
    super(arg)
    this.types.add(schema.ComedyEvent)
    initializeProperties<ComedyEvent>(this, init)
  }
}
ComedyEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComedyEvent)
ComedyEventMixin.Class = ComedyEventImpl
