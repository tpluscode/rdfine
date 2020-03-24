import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface TrainReservation extends Schema.Reservation, RdfResource {
}

export default function TrainReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrainReservationClass extends ReservationMixin(Resource) implements TrainReservation {
  }
  return TrainReservationClass
}

class TrainReservationImpl extends TrainReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TrainReservation>) {
    super(arg)
    this.types.add(schema.TrainReservation)
    initializeProperties(this, init)
  }
}
TrainReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TrainReservation)
TrainReservationMixin.Class = TrainReservationImpl
