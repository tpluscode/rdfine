import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface RentalCarReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
  dropoffLocation: Schema.Place<D> | undefined;
  dropoffTime: Date | undefined;
  pickupLocation: Schema.Place<D> | undefined;
  pickupTime: Date | undefined;
}

export function RentalCarReservationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RentalCarReservation> & RdfResourceCore> & Base {
  @namespace(schema)
  class RentalCarReservationClass extends ReservationMixin(Resource) implements Partial<RentalCarReservation> {
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

export const fromPointer = createFactory<RentalCarReservation>([ReservationMixin, RentalCarReservationMixin], { types: [schema.RentalCarReservation] });
