import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface RentalCarReservation<ID extends ResourceNode = ResourceNode> extends Schema.Reservation<ID>, RdfResource<ID> {
  dropoffLocation: Schema.Place<SiblingNode<ID>> | undefined;
  dropoffTime: Date | undefined;
  pickupLocation: Schema.Place<SiblingNode<ID>> | undefined;
  pickupTime: Date | undefined;
}

export function RentalCarReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RentalCarReservationClass extends ReservationMixin(Resource) implements RentalCarReservation {
    @property.resource()
    dropoffLocation: Schema.Place | undefined;
    @property.literal({ type: Date })
    dropoffTime: Date | undefined;
    @property.resource()
    pickupLocation: Schema.Place | undefined;
    @property.literal({ type: Date })
    pickupTime: Date | undefined;
  }
  return RentalCarReservationClass
}

class RentalCarReservationImpl extends RentalCarReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RentalCarReservation>) {
    super(arg, init)
    this.types.add(schema.RentalCarReservation)
  }

  static readonly __mixins: Mixin[] = [RentalCarReservationMixin, ReservationMixin];
}
RentalCarReservationMixin.appliesTo = schema.RentalCarReservation
RentalCarReservationMixin.Class = RentalCarReservationImpl
