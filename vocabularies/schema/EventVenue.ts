import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<EventVenue>) {
    super(arg, init)
    this.types.add(schema.EventVenue)
  }
}
EventVenueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EventVenue)
EventVenueMixin.Class = EventVenueImpl
