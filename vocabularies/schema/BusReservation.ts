import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BusReservation>) {
    super(arg, init)
    this.types.add(schema.BusReservation)
  }
}
BusReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusReservation)
BusReservationMixin.Class = BusReservationImpl
