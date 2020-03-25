import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<BusReservation>) {
    super(arg)
    this.types.add(schema.BusReservation)
    initializeProperties<BusReservation>(this, init)
  }
}
BusReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusReservation)
BusReservationMixin.Class = BusReservationImpl
