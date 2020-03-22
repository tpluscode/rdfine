import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EventReservation)
  }
}
EventReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EventReservation)
EventReservationMixin.Class = EventReservationImpl
