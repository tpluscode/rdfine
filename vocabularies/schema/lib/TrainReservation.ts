import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface TrainReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
}

export function TrainReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TrainReservation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TrainReservationClass extends ReservationMixin(Resource) implements Partial<TrainReservation> {
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

export const fromPointer = createFactory<TrainReservation>([ReservationMixin, TrainReservationMixin], { types: [schema.TrainReservation] });
