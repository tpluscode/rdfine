import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface BusReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
}

export function BusReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BusReservation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BusReservationClass extends ReservationMixin(Resource) implements Partial<BusReservation> {
  }
  return BusReservationClass
}

class BusReservationImpl extends BusReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusReservation>) {
    super(arg, init)
    this.types.add(schema.BusReservation)
  }

  static readonly __mixins: Mixin[] = [BusReservationMixin, ReservationMixin];
}
BusReservationMixin.appliesTo = schema.BusReservation
BusReservationMixin.Class = BusReservationImpl

export const fromPointer = createFactory<BusReservation>([ReservationMixin, BusReservationMixin], { types: [schema.BusReservation] });
