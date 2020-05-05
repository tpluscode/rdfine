import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ReservationMixin } from './Reservation';

export interface FlightReservation extends Schema.Reservation, RdfResource {
  boardingGroup: string;
  passengerPriorityStatus: string;
  passengerPriorityStatusTerm: Schema.QualitativeValue;
  passengerSequenceNumber: string;
  securityScreening: string;
}

export function FlightReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FlightReservationClass extends ReservationMixin(Resource) implements FlightReservation {
    @property.literal()
    boardingGroup!: string;
    @property.literal()
    passengerPriorityStatus!: string;
    @property({ path: schema.passengerPriorityStatus })
    passengerPriorityStatusTerm!: Schema.QualitativeValue;
    @property.literal()
    passengerSequenceNumber!: string;
    @property.literal()
    securityScreening!: string;
  }
  return FlightReservationClass
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
