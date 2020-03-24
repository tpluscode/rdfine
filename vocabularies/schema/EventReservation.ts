import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface EventReservation extends Schema.Reservation, RdfResource {
}

export default function EventReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EventReservationClass extends ReservationMixin(Resource) implements EventReservation {
  }
  return EventReservationClass
}

class EventReservationImpl extends EventReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<EventReservation>) {
    super(arg)
    this.types.add(schema.EventReservation)
    initializeProperties(this, init)
  }
}
EventReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EventReservation)
EventReservationMixin.Class = EventReservationImpl
