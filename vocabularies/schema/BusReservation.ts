import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface BusReservation extends Schema.Reservation, RdfResource {
}

export default function BusReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusReservationClass extends ReservationMixin(Resource) implements BusReservation {
  }
  return BusReservationClass
}

class BusReservationImpl extends BusReservationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BusReservation)
  }
}
BusReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusReservation)
BusReservationMixin.Class = BusReservationImpl
