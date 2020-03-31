import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<TrainReservation>) {
    super(arg, init)
    this.types.add(schema.TrainReservation)
  }
}
TrainReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TrainReservation)
TrainReservationMixin.Class = TrainReservationImpl
