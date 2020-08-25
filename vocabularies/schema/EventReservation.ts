import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ReservationMixin } from './Reservation';

export interface EventReservation extends Schema.Reservation, RdfResource {
}

export function EventReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EventReservationClass extends ReservationMixin(Resource) implements EventReservation {
  }
  return EventReservationClass
}

class EventReservationImpl extends EventReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EventReservation>) {
    super(arg, init)
    this.types.add(schema.EventReservation)
  }

  static readonly __mixins: Mixin[] = [EventReservationMixin, ReservationMixin];
}
EventReservationMixin.appliesTo = schema.EventReservation
EventReservationMixin.Class = EventReservationImpl
