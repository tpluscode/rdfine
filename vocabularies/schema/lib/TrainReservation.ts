import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface TrainReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
}

export function TrainReservationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TrainReservation> & RdfResourceCore> & Base {
  @namespace(schema)
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
