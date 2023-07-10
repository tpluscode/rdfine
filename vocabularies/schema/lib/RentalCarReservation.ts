import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface RentalCarReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
  dropoffLocation: Schema.Place<D> | undefined;
  dropoffTime: Date | undefined;
  pickupLocation: Schema.Place<D> | undefined;
  pickupTime: Date | undefined;
}

export function RentalCarReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RentalCarReservation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RentalCarReservationClass extends ReservationMixin(Resource) {
    @rdfine.property.resource()
    dropoffLocation: Schema.Place | undefined;
    @rdfine.property.literal({ type: Date })
    dropoffTime: Date | undefined;
    @rdfine.property.resource()
    pickupLocation: Schema.Place | undefined;
    @rdfine.property.literal({ type: Date })
    pickupTime: Date | undefined;
  }
  return RentalCarReservationClass as any
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

export const fromPointer = createFactory<RentalCarReservation>([ReservationMixin, RentalCarReservationMixin], { types: [schema.RentalCarReservation] });
