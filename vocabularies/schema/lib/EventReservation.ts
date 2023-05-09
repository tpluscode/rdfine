import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface EventReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
}

export function EventReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EventReservation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EventReservationClass extends ReservationMixin(Resource) implements Partial<EventReservation> {
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

export const fromPointer = createFactory<EventReservation>([ReservationMixin, EventReservationMixin], { types: [schema.EventReservation] });
