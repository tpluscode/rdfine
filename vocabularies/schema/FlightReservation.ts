import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface FlightReservation extends Schema.Reservation, RdfResource {
  boardingGroup: string;
  passengerPriorityStatus: Schema.QualitativeValue;
  passengerPriorityStatusLiteral: string;
  passengerSequenceNumber: string;
  securityScreening: string;
}

export default function FlightReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FlightReservationClass extends ReservationMixin(Resource) implements FlightReservation {
    @property.literal()
    boardingGroup!: string;
    @property.resource()
    passengerPriorityStatus!: Schema.QualitativeValue;
    @property.literal({ path: schema.passengerPriorityStatus })
    passengerPriorityStatusLiteral!: string;
    @property.literal()
    passengerSequenceNumber!: string;
    @property.literal()
    securityScreening!: string;
  }
  return FlightReservationClass
}

class FlightReservationImpl extends FlightReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FlightReservation>) {
    super(arg)
    this.types.add(schema.FlightReservation)
    initializeProperties<FlightReservation>(this, init)
  }
}
FlightReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FlightReservation)
FlightReservationMixin.Class = FlightReservationImpl
