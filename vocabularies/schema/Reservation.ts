import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Reservation extends Schema.Intangible, RdfResource {
  bookingAgent: Schema.Organization | Schema.Person | undefined;
  bookingTime: Date | undefined;
  broker: Schema.Organization | Schema.Person | undefined;
  modifiedTime: Date | undefined;
  priceCurrency: string | undefined;
  programMembershipUsed: Schema.ProgramMembership | undefined;
  provider: Schema.Organization | Schema.Person | undefined;
  reservationFor: Schema.Thing | undefined;
  reservationId: string | undefined;
  reservationStatus: Schema.ReservationStatusType | undefined;
  reservedTicket: Schema.Ticket | undefined;
  totalPrice: Schema.PriceSpecification | undefined;
  totalPriceLiteral: number | string | undefined;
  underName: Schema.Organization | Schema.Person | undefined;
}

export function ReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservationClass extends IntangibleMixin(Resource) implements Reservation {
    @property.resource()
    bookingAgent: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date })
    bookingTime: Date | undefined;
    @property.resource()
    broker: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date })
    modifiedTime: Date | undefined;
    @property.literal()
    priceCurrency: string | undefined;
    @property.resource()
    programMembershipUsed: Schema.ProgramMembership | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    reservationFor: Schema.Thing | undefined;
    @property.literal()
    reservationId: string | undefined;
    @property()
    reservationStatus: Schema.ReservationStatusType | undefined;
    @property.resource()
    reservedTicket: Schema.Ticket | undefined;
    @property.resource()
    totalPrice: Schema.PriceSpecification | undefined;
    @property.literal({ path: schema.totalPrice })
    totalPriceLiteral: number | string | undefined;
    @property.resource()
    underName: Schema.Organization | Schema.Person | undefined;
  }
  return ReservationClass
}

class ReservationImpl extends ReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Reservation>) {
    super(arg, init)
    this.types.add(schema.Reservation)
  }

  static readonly __mixins: Mixin[] = [ReservationMixin, IntangibleMixin];
}
ReservationMixin.appliesTo = schema.Reservation
ReservationMixin.Class = ReservationImpl
