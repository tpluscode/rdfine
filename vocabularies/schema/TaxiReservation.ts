import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ReservationMixin } from './Reservation';

export interface TaxiReservation extends Schema.Reservation, RdfResource {
  partySize: Schema.QuantitativeValue | undefined;
  partySizeLiteral: number | undefined;
  pickupLocation: Schema.Place | undefined;
  pickupTime: Date | undefined;
}

export function TaxiReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiReservationClass extends ReservationMixin(Resource) implements TaxiReservation {
    @property.resource()
    partySize: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.partySize, type: Number })
    partySizeLiteral: number | undefined;
    @property.resource()
    pickupLocation: Schema.Place | undefined;
    @property.literal({ type: Date })
    pickupTime: Date | undefined;
  }
  return TaxiReservationClass
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
