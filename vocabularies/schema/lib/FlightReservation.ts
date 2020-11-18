import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface FlightReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
  boardingGroup: string | undefined;
  passengerPriorityStatus: string | undefined;
  passengerPriorityStatusTerm: Schema.QualitativeValue | undefined;
  passengerSequenceNumber: string | undefined;
  securityScreening: string | undefined;
}

export function FlightReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FlightReservationClass extends ReservationMixin(Resource) implements FlightReservation {
    @property.literal()
    boardingGroup: string | undefined;
    @property.literal()
    passengerPriorityStatus: string | undefined;
    @property({ path: schema.passengerPriorityStatus })
    passengerPriorityStatusTerm: Schema.QualitativeValue | undefined;
    @property.literal()
    passengerSequenceNumber: string | undefined;
    @property.literal()
    securityScreening: string | undefined;
  }
  return FlightReservationClass
}

class FlightReservationImpl extends FlightReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FlightReservation>) {
    super(arg, init)
    this.types.add(schema.FlightReservation)
  }

  static readonly __mixins: Mixin[] = [FlightReservationMixin, ReservationMixin];
}
FlightReservationMixin.appliesTo = schema.FlightReservation
FlightReservationMixin.Class = FlightReservationImpl
