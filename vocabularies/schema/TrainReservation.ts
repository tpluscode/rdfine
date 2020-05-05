import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ReservationMixin } from './Reservation';

export interface TrainReservation extends Schema.Reservation, RdfResource {
}

export function TrainReservationMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [TrainReservationMixin, ReservationMixin];
}
TrainReservationMixin.appliesTo = schema.TrainReservation
TrainReservationMixin.Class = TrainReservationImpl
