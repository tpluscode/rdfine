import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface EventVenue extends Schema.CivicStructure, RdfResource {
}

export default function EventVenueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EventVenueClass extends CivicStructureMixin(Resource) implements EventVenue {
  }
  return EventVenueClass
}

class EventVenueImpl extends EventVenueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<EventVenue>) {
    super(arg)
    this.types.add(schema.EventVenue)
    initializeProperties<EventVenue>(this, init)
  }
}
EventVenueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EventVenue)
EventVenueMixin.Class = EventVenueImpl
