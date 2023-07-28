import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface TaxiReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
  partySize: Schema.QuantitativeValue<D> | undefined;
  partySizeLiteral: number | undefined;
  pickupLocation: Schema.Place<D> | undefined;
  pickupTime: Date | undefined;
}

export function TaxiReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TaxiReservation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TaxiReservationClass extends ReservationMixin(Resource) {
    @rdfine.property.resource()
    partySize: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.partySize, type: Number })
    partySizeLiteral: number | undefined;
    @rdfine.property.resource()
    pickupLocation: Schema.Place | undefined;
    @rdfine.property.literal({ type: Date })
    pickupTime: Date | undefined;
  }
  return TaxiReservationClass as any
}

class TaxiReservationImpl extends TaxiReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TaxiReservation>) {
    super(arg, init)
    this.types.add(schema.TaxiReservation)
  }

  static readonly __mixins: Mixin[] = [TaxiReservationMixin, ReservationMixin];
}
TaxiReservationMixin.appliesTo = schema.TaxiReservation
TaxiReservationMixin.Class = TaxiReservationImpl

export const fromPointer = createFactory<TaxiReservation>([ReservationMixin, TaxiReservationMixin], { types: [schema.TaxiReservation] });
