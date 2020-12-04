import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface BoatReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
}

export function BoatReservationMixin<Base extends Constructor>(Resource: Base): Constructor<BoatReservation> & Base {
  @namespace(schema)
  class BoatReservationClass extends ReservationMixin(Resource) implements BoatReservation {
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
