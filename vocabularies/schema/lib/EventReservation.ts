import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface EventReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
}

export function EventReservationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EventReservation> & RdfResourceCore> & Base {
  @namespace(schema)
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
