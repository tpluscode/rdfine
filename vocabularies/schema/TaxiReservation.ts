import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface TaxiReservation extends Schema.Reservation, RdfResource {
  partySize: Schema.QuantitativeValue;
  partySizeLiteral: number;
  pickupLocation: Schema.Place;
  pickupTime: Date;
}

export default function TaxiReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiReservationClass extends ReservationMixin(Resource) implements TaxiReservation {
    @property.resource()
    partySize!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.partySize })
    partySizeLiteral!: number;
    @property.resource()
    pickupLocation!: Schema.Place;
    @property.literal()
    pickupTime!: Date;
  }
  return TaxiReservationClass
}

class TaxiReservationImpl extends TaxiReservationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TaxiReservation)
  }
}
TaxiReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TaxiReservation)
TaxiReservationMixin.Class = TaxiReservationImpl
