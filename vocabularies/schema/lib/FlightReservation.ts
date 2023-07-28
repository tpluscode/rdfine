import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface FlightReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
  boardingGroup: string | undefined;
  passengerPriorityStatus: string | undefined;
  passengerPriorityStatusTerm: Schema.QualitativeValue | undefined;
  passengerSequenceNumber: string | undefined;
  securityScreening: string | undefined;
}

export function FlightReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FlightReservation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FlightReservationClass extends ReservationMixin(Resource) {
    @rdfine.property.literal()
    boardingGroup: string | undefined;
    @rdfine.property.literal()
    passengerPriorityStatus: string | undefined;
    @rdfine.property({ path: schema.passengerPriorityStatus })
    passengerPriorityStatusTerm: Schema.QualitativeValue | undefined;
    @rdfine.property.literal()
    passengerSequenceNumber: string | undefined;
    @rdfine.property.literal()
    securityScreening: string | undefined;
  }
  return FlightReservationClass as any
}

class FlightReservationImpl extends FlightReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FlightReservation>) {
    super(arg, init)
    this.types.add(schema.FlightReservation)
  }

  static readonly __mixins: Mixin[] = [FlightReservationMixin, ReservationMixin];
}
FlightReservationMixin.appliesTo = schema.FlightReservation
FlightReservationMixin.Class = FlightReservationImpl

export const fromPointer = createFactory<FlightReservation>([ReservationMixin, FlightReservationMixin], { types: [schema.FlightReservation] });
