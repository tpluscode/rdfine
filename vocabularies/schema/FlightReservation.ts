import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface FlightReservation extends Schema.Reservation, RdfResource {
  boardingGroup: string;
  passengerPriorityStatus: string;
  passengerPriorityStatusTerm: Schema.QualitativeValue;
  passengerSequenceNumber: string;
  securityScreening: string;
}

export default function FlightReservationMixin<Base extends Constructor>(Resource: Base) {
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
}
FlightReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FlightReservation)
FlightReservationMixin.Class = FlightReservationImpl
