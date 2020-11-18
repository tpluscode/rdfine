import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface BusReservation<ID extends ResourceNode = ResourceNode> extends Schema.Reservation<ID>, RdfResource<ID> {
}

export function BusReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusReservationClass extends ReservationMixin(Resource) implements BusReservation {
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
