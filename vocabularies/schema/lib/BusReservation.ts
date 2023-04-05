import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface BusReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
}

export function BusReservationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BusReservation> & RdfResourceCore> & Base {
  @namespace(schema)
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
