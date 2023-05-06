import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface BoatReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
}

export function BoatReservationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BoatReservation> & RdfResourceCore> & Base {
  @namespace(schema)
  class BoatReservationClass extends ReservationMixin(Resource) implements Partial<BoatReservation> {
  }
  return BoatReservationClass
}

class BoatReservationImpl extends BoatReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BoatReservation>) {
    super(arg, init)
    this.types.add(schema.BoatReservation)
  }

  static readonly __mixins: Mixin[] = [BoatReservationMixin, ReservationMixin];
}
BoatReservationMixin.appliesTo = schema.BoatReservation
BoatReservationMixin.Class = BoatReservationImpl

export const fromPointer = createFactory<BoatReservation>([ReservationMixin, BoatReservationMixin], { types: [schema.BoatReservation] });
